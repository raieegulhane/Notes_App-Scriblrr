import "./home.css";
import { useComponent } from "../../contexts/component-context";
import { SecondaryNav, NoteInputForm } from "../../components";
import { NotesList } from "../../components/notes/notes-list";
import { useNote } from "../../contexts/note-context";

const Home = () => {
    const { noteState } = useNote();
    const { allNotes } = noteState;
    const { componentState } = useComponent();
    return(
        <div className="flex-col">
            <SecondaryNav />
            
            {
                componentState.showTextEditor &&
                <NoteInputForm />
            }

            <div>
            <NotesList 
                inputNotesArray={allNotes}
            />
            </div>
        </div>
    );
}

export { Home };