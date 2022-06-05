import "./note-input-form.css";
import "../text-editor/text-editor.css";
import { useComponent } from "../../../contexts/component-context";
import { RichTextEditor } from "../text-editor";
import { ColorPalette } from "../color-palette";
import { PriorityList } from "../priority-list";
import { useState } from "react";

const NoteInputForm = () => {
    const { state: componentState, dispatch: componentDispatch } = useComponent();
    const { showColorPalette, showPriorityOptions } = componentState;

    const initialNoteValues = {
        noteTitle: "",
        noteBody: "",
        noteColor: "#ffffff",
        notePriority: "Low",
        isPinned: false
    }

    const [noteValues, setNoteValues] = useState(initialNoteValues);

    const {
        noteTitle,
        noteBody,
        noteColor,
        isPinned
    } = noteValues;

    const updateNoteValues = (event) => {
        const { name, value } = event.target;
        setNoteValues((noteValues) => ({ ...noteValues, [name]: value }));
    }

    const updateNoteBody = (value) => {
        setNoteValues((noteValues) => ({ ...noteValues, noteBody: value}));
    }

    const updatePinnedStatus = () => {
        setNoteValues({ ...noteValues, isPinned: !noteValues.isPinned});
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
                        <i class="fa-solid fa-xmark"></i>
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
                            <button className="btn btn-icon editor-btn">
                                <i className="fa-solid fa-tag"></i>
                            </button>
                            <div className={`${showPriorityOptions ? "priority-list-toggle" : ""} flex-row flex_align-middle`}>
                                <button 
                                    className="btn btn-icon editor-btn"
                                    onClick={() => componentDispatch({type: "SHOW_PRIORITY_OPTIONS"})}
                                >
                                    <i class="fa-solid fa-circle-exclamation"></i>
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
                            <button className="btn btn-cr btn-primary btn-add-note">
                                Add Note
                            </button>
                        </div>

                        {
                            showColorPalette &&
                            <ColorPalette
                                onClick={updateNoteValues}
                            />
                        }
                    </div>
                </div> 
            </div>
        </div>
    );
}

export { NoteInputForm };


