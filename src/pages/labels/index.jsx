import "./labels.css";
import parse from 'html-react-parser';
import { useState } from "react";
import { useNote, useComponent } from "../../contexts";
import { useToast } from "../../custom-hooks";
import { AddNoteButton, NoteInputForm } from "../../components";


const Labels = () => {
    const { showToast }  = useToast();

    const { componentState, componentDispatch } = useComponent();
    const { showTextEditor, showLabelDeleteConfirmation } = componentState;

    const { noteState, noteDispatch } = useNote();
    const { allNotes, allLabels } = noteState;

    const [newLabel, setNewLabel] = useState("");
    const [selectedLabelId, setSelectedLabelId] = useState("");
    const [filteredNotesList, setFilteredNotesList] = useState([]);
    const [labelName, setLabelName] = useState("");

    const addNewLabel = (event) => {
        const { value } = event.target;
        if (event.key === "Enter" && value) {
            noteDispatch({ type: "ADD_NEW_LABEL", payload: newLabel });
            setNewLabel("");
            showToast("success", "New label added!");
        }
    }

    const confirmDeleteLabel = (labelId) => {
        setSelectedLabelId(labelId);
        componentDispatch({ type: "SHOW_LABEL_DELETE_CONFIRMATION" })
    }

    const deleteLabel = () => {
        noteDispatch({ type: "DELETE_LABEL", payload: selectedLabelId });
        componentDispatch({ type: "SHOW_LABEL_DELETE_CONFIRMATION" })
        showToast("success", "Label deleted.");
    }

    const filterNotesByLabel = (labelId, labelName) => {
        const filteredByLabelNotes = allNotes.filter((note) => (
            note.noteLabels.findIndex((label) => label.id === labelId) >= 0
        ))

        setFilteredNotesList(filteredByLabelNotes);
        setLabelName(labelName);
    }

    

    return(
        <div className="label-page-wrapper">
            <div className="flex-row flex_justify-center">
                <div className="add-label-bar flex-row flex_justify-center flex_align-middle">
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
                    allLabels.length <= 0 &&
                    <p className="archived-note flex flex_justify-center flex_align-middle">
                        You don't have any labels. Type and hit enter to add. 
                    </p> 
                }
                {
                    allLabels.length > 0 &&
                    allLabels.map(({ id, labelValue }) => {
                        return(
                            <button
                                key={id}
                                className="btn btn-primary btn-cr chip-label flex-row flex_align-middle flex_justify-center"
                                value={labelValue}
                                onClick={() => filterNotesByLabel(id, labelValue)}
                            >
                                {labelValue}
                                <button 
                                    className="label-delete-btn btn-icon"
                                    onClick={() => confirmDeleteLabel(id)}
                                >
                                    <i className="fa-solid fa-trash-can"></i>
                                </button>
                            </button>
                        );
                    })
                }
            </div>

            <div className="label-notes-container">
                {
                    allLabels.length > 0 && filteredNotesList.length <= 0 &&
                    <p className="archived-note flex flex_justify-center flex_align-middle">
                        Click on any label to get filtered notes...
                    </p>
                }
                {
                    allLabels.length > 0 && filteredNotesList.length > 0 &&
                    <div className="home-notes-container">
                        <h2 className="home-list-heading">NOTES FILTERED BY LABEL: <span className="label-name">{labelName}</span></h2>
                        
                        <div className="notes-list-wrapper">
                            <div className="notes-list-container flex-row">
                                {
                                    filteredNotesList.map(({ displayDate, displayTime, noteTitle, noteBody, noteColor, noteLabels}) => {
                                        return(
                                            <div 
                                                style={{ backgroundColor: noteColor }}
                                                className="label-page-note note-card-wrapper flex-col flex_justify-sb"
                                            >
                                                <div>
                                                    <div className="note-timestamp-container flex-col">
                                                        <p>{displayDate}</p>
                                                        <p>{displayTime}</p>
                                                    </div>    
                                    
                                                    <div className="note-content-display">
                                                        <h3 className="note-card-title">{noteTitle}</h3>
                                                        <div className="note-body">{parse(`${noteBody}`)}</div>
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
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>    
                    </div>
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

            <AddNoteButton />

            {
                showTextEditor &&
                <NoteInputForm />
            }
        </div>
    );
}

export { Labels };