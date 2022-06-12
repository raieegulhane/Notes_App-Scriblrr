import "./home.css";
import { useFilter, useNote, useComponent } from "../../contexts";
import { SecondaryNav, NoteInputForm, NotesList } from "../../components";
import { getFilteredAndSortedNotes } from "../../utility-functons"


const Home = () => {
    const { filterState } = useFilter();
    const { noteState } = useNote();
    const { allNotes } = noteState;
    const { componentState } = useComponent();

    const filteredAndSortedNotes = getFilteredAndSortedNotes(allNotes, filterState);

    return(
        <div className="flex-col">
            <SecondaryNav />
            {
                componentState.showTextEditor &&
                <NoteInputForm />
            }
            <div>
            <NotesList 
                inputNotesArray={filteredAndSortedNotes}
            />
            </div>
        </div>
    );
}

export { Home };