import "./note-card.css";
import parse from 'html-react-parser';
import { useState } from "react";
import { useComponent } from "../../../contexts/component-context";
import { useAuth } from "../../../contexts/auth-context";
import { useNote } from "../../../contexts/note-context";
import { postArchiveService } from "../../../services/archive-services/post-archive-service";
import { deleteNoteService } from "../../../services/notes-services/delete-note-service";
import { restoreArchiveService } from "../../../services/archive-services/restore-archive-service";
import { restoreTrashedNoteService } from "../../../services/trash-services/restore-trash-note-service";
import { trashNoteService } from "../../../services/trash-services/trash-note-service";


const NoteCard = ({ currentNote }) => {
    const { _id, noteTitle, noteBody, noteColor, isArchived, isTrashed } = currentNote;
    const { authToken } = useAuth(); 
    const { noteState, noteDispatch } = useNote();
    const { componentDispatch } = useComponent();

    const [editorVisibility, setEditorVisibility] = useState(false);
    const showCardButtons = () => {
        if (editorVisibility) {
            return "card-btn-visible"
        } 
        return "card-btn-hidden"
    }

    const editNoteHandler = () => {
        componentDispatch({ type: "SHOW_TEXT_EDITOR" });
        noteDispatch({ type: "EDIT_NOTE", payload: { editNoteStatus: true, editNoteId: _id }})
    }

    const deleteNoteHandler = async () => {
        try {
            const { data: { notes } } = await deleteNoteService(currentNote, authToken);
            noteDispatch({ type: "DELETE_NOTE", payload: { notes } });
        } catch (error) {
            console.log("DELETE_NOTE_ERROR: ", error);
        }
    }

    const archiveStateHandler = async () => {
        try {
            const { data: { notes, archives } } = isArchived ? 
                await restoreArchiveService(currentNote, authToken) :
                await postArchiveService(currentNote, authToken);

                console.log(notes, archives);

            noteDispatch({ type: "SET_ARCHIVED_NOTES", payload: { notes, archives } });            
        } catch (error) {
            console.log("POST_ARCHIVE_ERROR: ", error);
        }
    }

    const trashStateHandler = async () => {
        try {
            const { data: { notes, trash } } = isTrashed ?
                await restoreTrashedNoteService(currentNote, authToken) :
                await trashNoteService(currentNote, authToken); 

                console.log(notes, trash)

            noteDispatch({ type: "SET_TRASHED_NOTES", payload: { notes, trash } });            
        } catch (error) {
            console.log("POST_TRASH_ERROR: ", error);
        }
    }


    return(
        <div 
            style={{ backgroundColor: noteColor }}
            className="note-card-wrapper flex-col flex_justify-sb">

            <div className="note-content-display">
                <h3 className="note-card-title">{noteTitle}</h3>
                <div>{parse(`${noteBody}`)}</div>
            </div>
            
            <div className="edit-panel flex-row flex_justify-end flex_align-middle">
                {
                    !isArchived && !isTrashed &&
                    <div className="flex-row">
                        <button className={`btn btn-icon editor-btn pin-btn ${showCardButtons()}`}>
                            <i className="fa-solid fa-thumbtack"></i>
                        </button>
                        <button 
                            className={`btn btn-icon editor-btn card-btn ${showCardButtons()}`}
                            onClick={editNoteHandler}
                        >
                            <i className="fa-solid fa-pen"></i>
                        </button>
                        <button 
                            className={`btn btn-icon editor-btn card-btn ${showCardButtons()}`}
                            onClick={archiveStateHandler}
                        >
                            <i className="fa-solid fa-box-archive"></i>
                        </button>
                        <button 
                            className={`btn btn-icon editor-btn card-btn ${showCardButtons()}`}
                            onClick={trashStateHandler}
                        >
                            <i className="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                }
                {
                    isArchived && !isTrashed &&
                    <div className="flex-row">
                        <button 
                            className={`btn btn-icon editor-btn card-btn ${showCardButtons()}`}
                            onClick={archiveStateHandler}
                        >
                            <i className="fa-solid fa-folder-minus"></i>
                        </button>
                        <button 
                            className={`btn btn-icon editor-btn card-btn ${showCardButtons()}`}
                            onClick={trashStateHandler}
                        >
                            <i className="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                }
                {
                    isTrashed && !isArchived &&
                    <div className="flex-row">
                        <button 
                            className={`btn btn-icon editor-btn card-btn ${showCardButtons()}`}
                            onClick={trashStateHandler}
                        >
                            <i className="fa-solid fa-trash-arrow-up"></i>
                        </button>
                        <button 
                            className={`btn btn-icon editor-btn card-btn ${showCardButtons()}`}
                            onClick={deleteNoteHandler}
                        >
                            <i className="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                }

                <button 
                    className="btn btn-icon editor-btn card-btn "
                    onClick={() => setEditorVisibility(!editorVisibility)}
                >
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </button>
            </div>
        </div>
    );
}

export { NoteCard };