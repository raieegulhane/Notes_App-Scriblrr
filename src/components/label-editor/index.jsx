import "./label-editor.css";
import { useComponent } from "../../contexts/component-context";
import { useNote } from "../../contexts/note-context";
import { useState } from "react";

const LabelEditor = () => {
    const { componentDispatch } = useComponent();
    const { noteState, noteDispatch } = useNote();
    const { allLabels } = noteState;

    const [newLabel, setNewLAbel] = useState("");

    const addNewLabel = () => {
        noteDispatch({ type: "ADD_NEW_LABEL", payload: newLabel });
        setNewLAbel("");
    }

    return(
        <div className="label-editor-wrapper">
            <button 
                className="btn btn-icon btn-close"
                onClick={() => componentDispatch({type: "SHOW_LABEL_EDITOR"})}
            >
                <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="label-add-container flex-row flex_justify-center flex_align-middle">
                <input
                    className="label-input input input-rd"
                    type="text"
                    placeholder="Enter label name..."
                    value={newLabel}
                    onChange={(event) => setNewLAbel(event.target.value)}
                />

                <button 
                    className="add-label-btn btn btn-primary btn-cr btn-add-note"
                    onClick={addNewLabel}
                >
                    Add Label
                </button>
            </div>

            <div className="labels-container">
                <h5 className="labels-heading">Click on labels to select...</h5>

                <div className="label-chip-container">
                    {
                        allLabels.map((label) => {
                            return(
                                <button 
                                    className="label-chip btn btn-primary btn-cr"
                                >
                                    {label}
                                </button>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export { LabelEditor };