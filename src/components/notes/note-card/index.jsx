import "./note-card.css";
import parse from 'html-react-parser';
import { useState } from "react";
import { useComponent } from "../../../contexts/component-context";
import { useAuth } from "../../../contexts/auth-context";
import { useNote } from "../../../contexts/note-context";
import { postArchiveService } from "../../../services/archive-services/post-archive-service";
import { deleteNoteService } from "../../../services/notes-services/delete-note-service";

const NoteCard = ({ currentNote }) => {
    const { _id, noteTitle, noteBody, noteColor, isArchived } = currentNote;
    const { authToken } = useAuth(); 
    const { componentDispatch } = useComponent();
    const { noteDispatch } = useNote();

    const [noteValues, setNoteValues] = useState(currentNote);

    const [editorVisibility, setEditorVisibility] = useState(false);
    const showCardButtons = () => {
        if (editorVisibility) {
            return "card-btn-visible"
        } 
        return "card-btn-hidden"
    }

    const editNoteHandler = () => {
        componentDispatch({ type: "SHOW_TEXT_EDITOR" });
        noteDispatch({ type: "EDIT_NOTE", payload: { editNoteStatus: true, editNoteId: _id}})
        console.log(isArchived);
    }

    const deleteNoteHandler = async () => {
        setNoteValues((currentNoteValues) => ({ ...currentNoteValues, isDeleted: true}));
        console.log()
        try {
            const { data: { notes, trash} } = await deleteNoteService(noteValues, authToken);
            noteDispatch({ type: "DELETE_NOTE", payload: { notes, trash } });
        } catch (error) {
            console.log("DELETE_NOTE_ERROR: ", error);
        }
    }

    const archiveNoteHandler = async () => {
        setNoteValues((currentNoteValues) => ({ ...currentNoteValues, isArchived: true}));

        try {
            const { data: { archives, notes } } = await postArchiveService(noteValues, authToken);
            noteDispatch({ type: "SET_ARCHIVE_NOTE", payload: { notes, archives }});            
        } catch (error) {
            console.log("POST_ARCHIVE_ERROR: ", error);
        }
    }


    return(
        <div 
            style={{ backgroundColor: noteColor }}
            className="note-card-wrapper flex-col flex_justify-sb">
            <button className={`btn btn-icon editor-btn pin-btn ${showCardButtons()}`}>
                <i className="fa-solid fa-thumbtack"></i>
            </button>

            <div className="note-content-display">
                <h3 className="note-card-title">{noteTitle}</h3>
                <div>{parse(`${noteBody}`)}</div>
            </div>
            
            <div className="edit-panel flex-row flex_justify-end flex_align-middle">
                <button 
                    className={`btn btn-icon editor-btn card-btn ${showCardButtons()}`}
                    onClick={editNoteHandler}
                >
                    <i className="fa-solid fa-pen"></i>
                </button>
                <button 
                    className={`btn btn-icon editor-btn card-btn ${showCardButtons()}`}
                    onClick={archiveNoteHandler}
                >
                    <i className="fa-solid fa-box-archive"></i>
                </button>
                <button 
                    className={`btn btn-icon editor-btn card-btn ${showCardButtons()}`}
                    onClick={deleteNoteHandler}
                >
                    <i className="fa-solid fa-trash-can"></i>
                </button>
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