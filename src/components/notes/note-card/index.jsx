import "./note-card.css";
import parse from 'html-react-parser';
import { useState } from "react";
import { useAuth, useNote, useComponent } from "../../../contexts";
import { 
    postArchiveService,
    restoreArchiveService,
    trashNoteService,
    restoreTrashedNoteService,
    deleteTrashService
} from "../../../services";


const NoteCard = ({ currentNote }) => {
    const { _id, 
            noteTitle, 
            noteBody, 
            noteColor, 
            noteLabels, 
            isPinned, 
            isArchived, 
            isTrashed, 
            displayDate, 
            displayTime 
        } = currentNote;

    const { authToken } = useAuth(); 
    const { noteDispatch } = useNote();
    const { componentDispatch } = useComponent();

    const [pinnedState, setPinnedState] = useState(isPinned ? true : false);

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

    const archiveStateHandler = async () => {
        try {
            const { data: { notes, archives } } = isArchived ? 
                await restoreArchiveService(currentNote, authToken) :
                await postArchiveService(currentNote, authToken);
            noteDispatch({ type: "SET_ARCHIVED_NOTES", payload: { notes, archives } });            
        } catch (error) {
            console.log("POST_ARCHIVE_ERROR: ", error);
        }
    }

    const trashStateHandler = async () => {
        try {
            const { data: { notes, archives, trash } } = isTrashed ?
                await restoreTrashedNoteService(currentNote, authToken) :
                await trashNoteService(currentNote, authToken); 
            noteDispatch({ type: "SET_TRASHED_NOTES", payload: { notes, archives, trash } });            
        } catch (error) {
            console.log("POST_TRASH_ERROR: ", error);
        }
    }

    const premenantDeleteHandler = async () => {
        try {
            const { data: { trash } } = await deleteTrashService(currentNote, authToken);
            noteDispatch({ type: "PERMANANT_DELETE_NOTE", payload: { trash } });
        } catch (error) {
            console.log("DELETE_NOTE_ERROR: ", error);
        }
    }


    return(
        <div 
            style={{ backgroundColor: noteColor }}
            className="note-card-wrapper flex-col flex_justify-sb"
            onMouseOver={() => setEditorVisibility(true)}
            onMouseOut={() => setEditorVisibility(false)}
        >
            <div>
                <div className="note-timestamp-container flex-col">
                    <p>{displayDate}</p>
                    <p>{displayTime}</p>
                </div>    

                <div className="note-content-display">
                    <h3 className="note-card-title">{noteTitle}</h3>
                    <div>{parse(`${noteBody}`)}</div>
                </div>
            </div>

            <div className="flex-col">
                <div className="note-labels-container flex-row">
                    {
                        noteLabels.map(({ id, value }) => {
                            return(
                                <div 
                                    key={id}
                                    className="note-label-chip"
                                >
                                    {value}
                                </div>
                            );
                        })
                    }
                </div>
                
                <div 
                    className="edit-panel flex-row flex_justify-end flex_align-middle"
                >
                    {
                        isPinned &&
                        <button className={`btn btn-icon editor-btn pin-btn pinned`}>
                            <i className="fa-solid fa-thumbtack"></i>
                        </button>
                    }
                    {
                        !isArchived && !isTrashed &&
                        <div className="flex-row">
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
                        isTrashed &&
                        <div className="flex-row">
                            <button 
                                className={`btn btn-icon editor-btn card-btn ${showCardButtons()}`}
                                onClick={trashStateHandler}
                            >
                                <i className="fa-solid fa-trash-arrow-up"></i>
                            </button>
                            <button 
                                className={`btn btn-icon editor-btn card-btn ${showCardButtons()}`}
                                onClick={premenantDeleteHandler}
                            >
                                <i className="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    }

                    <button className="btn btn-icon editor-btn card-btn">
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export { NoteCard };