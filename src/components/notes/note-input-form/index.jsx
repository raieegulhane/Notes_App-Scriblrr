import "./note-input-form.css";
import { RichTextEditor } from "./text-editor";

const NoteInputForm = () => {
    return(
        <div className="note-input-wrapper flex-col">
            <button className="btn btn-icon btn-close">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <div className="input-container flex-col">
                <input 
                    className="note-title heading-xs" 
                    type="text"
                    placeholder="Title"
                />
                <RichTextEditor />
            </div>

            <div className="note-action-panel flex-row flex_justify-sb flex_align-middle">
                <div className="note-content-action flex-row flex_align-middle">
                    <button className="btn btn-icon">
                        <i className="fa-solid fa-thumbtack"></i>
                    </button>
                    <button className="btn btn-icon">
                        <i className="fa-solid fa-palette"></i>
                    </button>
                    <button className="btn btn-icon">
                        <i className="fa-solid fa-tag"></i>
                    </button>
                    <button className="btn btn-icon">
                        <i className="fa-solid fa-box-archive"></i>
                    </button>
                    <button className="btn btn-icon">
                        <i className="fa-solid fa-trash-can"></i>
                    </button>
                </div>

                <div className="note-input-action flex-row flex_align-middle">
                <button className="btn btn-cr btn-primary btn-add-note">
                    Add Note
                </button>
                </div>
            </div>
        </div>
    );
}

export { NoteInputForm }