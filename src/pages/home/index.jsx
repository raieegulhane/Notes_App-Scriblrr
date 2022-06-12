import "./home.css";
import { useFilter, useNote, useComponent } from "../../contexts";
import { SecondaryNav, NoteInputForm, NotesList} from "../../components";
import { getFilteredAndSortedNotes } from "../../utility-functons"


const Home = () => {
    const { filterState } = useFilter();
    const { noteState: { allNotes} } = useNote();
    const { componentState } = useComponent();

    const filteredAndSortedNotes = getFilteredAndSortedNotes(allNotes, filterState);

    const pinnedNotesList = [ ...filteredAndSortedNotes ].filter((note) => note.isPinned);
    const unPinnedNotesList = [ ...filteredAndSortedNotes ].filter((note) => !note.isPinned);
    const pinnedNotesListLength = pinnedNotesList.length;

    return(
        <div className="flex-col">
            <SecondaryNav />
            {
                componentState.showTextEditor &&
                <NoteInputForm />
            }

            <div className="home-notes-list-wrapper">
                {
                    pinnedNotesListLength > 0 &&
                    <div className="home-notes-container">
                        <h2 className="home-list-heading">PINNED</h2>
                        <NotesList 
                            inputNotesArray={pinnedNotesList}
                        />    
                    </div>
                }

                <div className="pinned-notes-container">
                    <h2 className="home-list-heading">{pinnedNotesListLength > 0 ? "OTHERS" : "ALL NOTES"}</h2>
                    <NotesList 
                        inputNotesArray={unPinnedNotesList}
                    />    
                </div>
            </div>
        </div>
    );
}

export { Home };