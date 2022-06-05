import "./label-editor.css";
import { useComponent } from "../../contexts/component-context";

const LabelEditor = () => {
    const { dispatch: componentDispatch } = useComponent();

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
                />

                <button 
                    className="add-label-btn btn btn-primary btn-cr btn-add-note"
                >
                    Add Label
                </button>
            </div>

            <div className="label-chips-container">
                <h5 className="label-chips-heading">All Labels:</h5>

            </div>
        </div>
    );
}

export { LabelEditor };