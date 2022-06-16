import "./add-note-float-button.css";
import AddIcon from '@mui/icons-material/Add';
import { useComponent } from "../../contexts";
import { NoteInputForm } from "..";

const AddNoteButton = () => {
    const { componentState, componentDispatch } = useComponent();

    return(
        <div>
            <button 
                className="btn add-note-floating btn-floating btn-rd btn-primary flex flex_justify-center flex_align-middle"
                onClick={() => componentDispatch({type: "SHOW_TEXT_EDITOR"})}
            >
                <AddIcon />
            </button>

            {
                componentState.showTextEditor &&
                <NoteInputForm />
            }
        </div>
    );
}

export { AddNoteButton };