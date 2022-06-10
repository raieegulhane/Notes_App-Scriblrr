import "./note-input-form.css";
import { useState, useEffect } from "react";
import { useAuth, useNote, useComponent } from "../../../contexts";
import { postNoteService, editNoteService } from "../../../services";
import { RichTextEditor, ColorPalette, PriorityList, LabelEditor } from "../../../components";


const NoteInputForm = () => {
    const { authToken } = useAuth();

    const { noteState, noteDispatch } = useNote();
    const { allNotes, isEditing, isEditingId } = noteState;

    const { componentState, componentDispatch } = useComponent();
    const { showColorPalette, showPriorityOptions, showLabelEditor } = componentState;

    const initialNoteValues = {
        noteTitle: "",
        noteBody: "",
        noteColor: "#ffffff",
        notePriority: "Low",
        noteLabels: [],
        isPinned: false,
        isArchived: false,
        isTrashed: false,
    }

    const [noteValues, setNoteValues] = useState(initialNoteValues);
    const {
        noteTitle,
        noteBody,
        noteColor,
        noteLabels,
        isPinned,
    } = noteValues;

    const updateNoteValues = (event) => {
        const { name, value } = event.target;
        setNoteValues((prevNoteValues) => ({ ...prevNoteValues, [name]: value }));
    }

    const updateNoteBody = (value) => {
        setNoteValues((prevNoteValues) => ({ ...prevNoteValues, noteBody: value}));
    }

    const addNoteLabels = (labelId, labelValue) => {
        setNoteValues((prevNoteValues) => ({ 
            ...prevNoteValues, 
            noteLabels: noteLabels.findIndex((label) => label.id === labelId) < 0 ?
                [ ...noteLabels, { id: labelId, value: labelValue } ]:
                [ ...noteLabels ]
        }))
    }

    const removeNoteLabels = (labelId) => {
        setNoteValues((prevNoteValues) => ({
            ...prevNoteValues,
            noteLabels: noteLabels.filter((label) => label.id !== labelId)
        }))
    }

    const updatePinnedStatus = () => {
        setNoteValues({ ...noteValues, isPinned: !noteValues.isPinned});
    }

    useEffect(() => {
        if (isEditing) {
            const currentNote = allNotes.find((note) => note._id === isEditingId);
            setNoteValues(currentNote);
        }
    }, [isEditing]);

    const setNote = async () => {
        try {
            const { data: { notes }} = isEditing ? 
                await editNoteService(noteValues, authToken) :
                await postNoteService(noteValues, authToken);

            noteDispatch({ type: "SET_NOTES", payload: notes});
            componentDispatch({ type: "SHOW_TEXT_EDITOR" });
            noteDispatch({ type: "EDIT_NOTE", payload: { noteEditStatus: false, editNoteId: ""}})
        } catch (error) {
            console.log("ADD_NEW_NOTE_ERROR: ", error);
        }
    }

    return(
        <div className="note-input-wrapper flex flex_justify-center flex_align-middle">
            <div className="note-input-container flex-col">
                <div 
                    style={{ backgroundColor: noteColor }}
                    className="note-input flex-col"
                >
                    <button 
                        className="btn btn-icon btn-close"
                        onClick={() => componentDispatch({type: "SHOW_TEXT_EDITOR"})}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>

                    <div
                        className="input-container flex-col">
                        <input 
                            style={{ backgroundColor: noteColor }}
                            className="note-title heading-xs" 
                            type="text"
                            name="noteTitle"
                            placeholder="Title"
                            value={noteTitle}
                            onChange={updateNoteValues}
                        />
                        <RichTextEditor
                            value={noteBody}
                            onChange={updateNoteBody}
                        />
                    </div>

                    <div className="editor-labels-display flex-row">
                        {
                            noteLabels.map(({ id, value }) => {
                                return(
                                    <div 
                                        key = {id}
                                        className=" flex-row flex_align-middle editor-label-chip btn-primary btn-cr"
                                    >
                                        <span>{value}</span>
                                        <button 
                                            className="chip-close-btn"
                                            onClick={() => removeNoteLabels(id)}
                                        >
                                            <i className="fa-solid fa-xmark"></i>
                                        </button>                                    
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

                <div className="note-input-btn-panel">
                    <div className="note-action-panel flex-row flex_justify-sb flex_align-middle">
                        <div className="note-content-action flex-row flex_align-middle">
                            <button 
                                className="btn btn-icon editor-btn"
                                value={isPinned}
                                onClick={updatePinnedStatus}
                            >
                                <i className={`fa-solid fa-thumbtack ${isPinned ? "pin-icon-selected" : ""}`}></i>
                            </button>
                            <button 
                                className="btn btn-icon editor-btn"
                                onClick={() => componentDispatch({type: "SHOW_COLOR_PALETTE"})}
                            >
                                <i className="fa-solid fa-palette"></i>
                            </button>
                            <button 
                                className="btn btn-icon editor-btn"
                                onClick={() => componentDispatch({type: "SHOW_LABEL_EDITOR"})}
                            >
                                <i className="fa-solid fa-tag"></i>
                            </button>
                            <div className={`${showPriorityOptions ? "priority-list-toggle" : ""} flex-row flex_align-middle`}>
                                <button 
                                    className="btn btn-icon editor-btn"
                                    onClick={() => componentDispatch({type: "SHOW_PRIORITY_OPTIONS"})}
                                >
                                    <i className="fa-solid fa-circle-exclamation"></i>
                                </button>
                                {
                                    showPriorityOptions &&
                                    <PriorityList 
                                        onClick={updateNoteValues}
                                    />
                                }
                            </div>
                        </div>

                        <div className="note-input-action flex-row flex_align-middle">
                            <button 
                                className="btn btn-cr btn-primary btn-add-note"
                                onClick={setNote}
                            >
                                { isEditing ? "Edit Note" : "Add Note" }
                            </button>
                        </div>

                        {
                            showColorPalette &&
                            <ColorPalette
                                onClick={updateNoteValues}
                            />
                        }
                        {
                            showLabelEditor &&
                            <LabelEditor
                                onClick={addNoteLabels}
                            />
                        }
                    </div>
                </div> 
            </div>
        </div>
    );
}

export { NoteInputForm };


