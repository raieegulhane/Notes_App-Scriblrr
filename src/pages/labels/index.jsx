import "./labels.css";
import { useState } from "react";
import { useNote } from "../../contexts/note-context";
import { useComponent } from "../../contexts/component-context";

const Labels = () => {
    const { noteState, noteDispatch } = useNote();
    const { allLabels } = noteState;

    const [newLabel, setNewLabel] = useState("");
    const [selectedLabel, setSelectedLabel] = useState("");

    const addNewLabel = (event) => {
        const { value } = event.target;
        if (event.key === "Enter" && value) {
            noteDispatch({ type: "ADD_NEW_LABEL", payload: newLabel });
            setNewLabel("");
        }
    }

    return(
        <div className="label-page-wrapper">
            <div className="add-label-bar">
                <div className="sec-nav-container flex-row flex_justify-center flex_align-middle">
                    <input
                        className="add-label-input input input-rd" 
                        type="text"
                        placeholder="Enter label name and press enter to add..."
                        value={newLabel}
                        onChange={(event) => setNewLabel(event.target.value)}
                        onKeyDown={addNewLabel}
                    />
                </div>
            </div>

            <div className="labels-display-container flex-row flex_justify-center">
                {
                    allLabels.map((labelChip) => {
                        return(
                            <div 
                                className="btn btn-primary btn-cr chip-label flex-row flex_align-middle flex_justify-center"
                            >
                                {labelChip}
                                <button 
                                    className="label-delete-btn btn-icon"
                                    onClick={() => noteDispatch({ type: "DELETE_LABEL", payload: labelChip })}
                                >
                                    <i className="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export { Labels };