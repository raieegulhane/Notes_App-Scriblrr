import "./labels.css";
import { useState } from "react";
import { useNote } from "../../contexts/note-context";
import { useComponent } from "../../contexts/component-context";
    
const Labels = () => {
    const { componentState, componentDispatch } = useComponent();
    const { showLabelDeleteConfirmation } = componentState;

    const { noteState, noteDispatch } = useNote();
    const { allLabels } = noteState;

    const [newLabel, setNewLabel] = useState("");
    const [selectedLabelId, setSelectedLabelId] = useState("");

    const addNewLabel = (event) => {
        const { value } = event.target;
        if (event.key === "Enter" && value) {
            noteDispatch({ type: "ADD_NEW_LABEL", payload: newLabel });
            setNewLabel("");
        }
    }

    const confirmDeleteLabel = (labelId) => {
        setSelectedLabelId(labelId);
        componentDispatch({ type: "SHOW_LABEL_DELETE_CONFIRMATION" })
    }

    const deleteLabel = () => {
        noteDispatch({ type: "DELETE_LABEL", payload: selectedLabelId });
        componentDispatch({ type: "SHOW_LABEL_DELETE_CONFIRMATION" })
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
                    allLabels.map(({ id, labelValue }) => {
                        return(
                            <div 
                                key={id}
                                className="btn btn-primary btn-cr chip-label flex-row flex_align-middle flex_justify-center"
                            >
                                {labelValue}
                                <button 
                                    className="label-delete-btn btn-icon"
                                    onClick={() => confirmDeleteLabel(id)}
                                >
                                    <i className="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                        );
                    })
                }
            </div>

            {
                showLabelDeleteConfirmation &&
                <div className="del-confirmation-wrapper flex flex_justify-center flex_align-middle">
                    <div className="del-confirmation-container flex-col">
                        <p>This label will be permenantly deleted and removed from all of your Scriblrr notes. Your notes won’t be deleted.</p>
                        <div className="del-confirmation-btn-container flex-row flex_justify-end">
                            <button 
                                className="del-confirmation-btn btn btn-primary btn-cr"
                                onClick={() => componentDispatch({ type: "SHOW_LABEL_DELETE_CONFIRMATION" })}    
                            >
                                Cancel
                            </button>
                            <button 
                                className="del-confirmation-btn btn btn-outline btn-cr"
                                onClick={deleteLabel}    
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export { Labels };