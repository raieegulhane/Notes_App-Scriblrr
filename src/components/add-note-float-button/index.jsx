import "./add-note-float-button.css";
import { useComponent } from "../../contexts";

const AddNoteButton = () => {
    const { componentDispatch } = useComponent();

    return(
        <div>
            <button 
                className="btn add-note-floating btn-floating btn-rd btn-primary flex flex_justify-center flex_align-middle"
                onClick={() => componentDispatch({type: "SHOW_TEXT_EDITOR"})}
            >
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    );
}

export { AddNoteButton };