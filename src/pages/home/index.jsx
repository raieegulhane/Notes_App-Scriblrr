import "./home.css";
import { useFilter, useNote, useComponent } from "../../contexts";
import { SecondaryNav, NoteInputForm, NotesList } from "../../components";
import { getFilteredAndSortedNotes } from "../../helper-functions/get-filtered-and-sorted-notes";


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