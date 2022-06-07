import "./note-card.css";
import parse from 'html-react-parser';
import { useState } from "react";
import { useComponent } from "../../../contexts/component-context";
import { useNote } from "../../../contexts/note-context";

const NoteCard = ({ currentNote }) => {
    const { _id, noteTitle, noteBody, noteColor } = currentNote;
    const { componentDispatch } = useComponent();
    const { noteDispatch } = useNote();

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
                    onClick={() => editNoteHandler(_id)}
                >
                    <i className="fa-solid fa-pen"></i>
                </button>
                <button className={`btn btn-icon editor-btn card-btn ${showCardButtons()}`}>
                    <i className="fa-solid fa-box-archive"></i>
                </button>
                <button className={`btn btn-icon editor-btn card-btn ${showCardButtons()}`}>
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