import "./home.css";
import { useNote, useComponent } from "../../contexts";
import { SecondaryNav, NoteInputForm, NotesList } from "../../components";

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