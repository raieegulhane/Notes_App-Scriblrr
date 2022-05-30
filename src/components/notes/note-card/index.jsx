import "./note-card.css";
import { useState } from "react";

const NoteCard = () => {

    const [editorVisibility, setEditorVisibility] = useState(false);

    const showCardButtons = () => {
        if (editorVisibility) {
            return "card-btn-visible"
        } 
        return "card-btn-hidden"
    }

    return(
        <div className="note-card-wrapper">
            <button className={`btn btn-icon editor-btn pin-btn ${showCardButtons()}`}>
                <i className="fa-solid fa-thumbtack"></i>
            </button>

            <div className="note-content-display">
                <h3 className="note-card-title">Heading</h3>
                <p>Content</p>
            </div>
            
            <div className="edit-panel flex-row flex_align-middle">
                <button className={`btn btn-icon editor-btn card-btn ${showCardButtons()}`}>
                    <i className="fa-solid fa-pen"></i>
                </button>
                <button className={`btn btn-icon editor-btn card-btn ${showCardButtons()}`}>
                    <i className="fa-solid fa-palette"></i>
                </button>
                <button className={`btn btn-icon editor-btn card-btn ${showCardButtons()}`}>
                    <i className="fa-solid fa-tag"></i>
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
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </button>
            </div>
        </div>
    );
}

export { NoteCard };