import "./label-editor.css";
import { useState } from "react";
import { useNote, useComponent } from "../../contexts";
import { useToast } from "../../custom-hooks";


const LabelEditor = ({ onClick }) => {
    const { componentDispatch } = useComponent();
    const { noteState: { allLabels }, noteDispatch } = useNote();

    const { showToast } = useToast();

    const [newLabel, setNewLabel] = useState("");

    const addNewLabel = (event) => {
        const { value } = event.target;

        if (event.key === "Enter" && !value) {
            showToast("warning", "Label cannot be empty.");
        }

        if (event.key === "Enter" && value) {
            noteDispatch({ type: "ADD_NEW_LABEL", payload: newLabel });
            setNewLabel("");
        } 
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
                    placeholder="Enter label name and press enter to add..."
                    value={newLabel}
                    onChange={(event) => setNewLabel(event.target.value)}
                    onKeyDown={addNewLabel}
                />
            </div>

            <div className="labels-container">
                <h5 className="labels-heading">Click on labels to select...</h5>

                <div className="label-chip-container">
                    {
                        allLabels.map(({ id, labelValue }) => {
                            return(
                                <button 
                                    key = {id}
                                    className="label-chip btn btn-primary btn-cr"
                                    onClick={() => onClick(id, labelValue)}
                                >
                                    {labelValue}
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