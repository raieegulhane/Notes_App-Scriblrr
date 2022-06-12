import "./home.css";
import { useFilter, useNote, useComponent } from "../../contexts";
import { SecondaryNav, NoteInputForm, NotesList } from "../../components";
import { getFilteredAndSortedNotes } from "../../utility-functons"


const Home = () => {
    const { filterState } = useFilter();
    const { noteState } = useNote();
    const { allNotes, searchResults: { searching, searchedNotes } } = noteState;
    const { componentState } = useComponent();

    const filteredAndSortedNotes = getFilteredAndSortedNotes(allNotes, filterState);

    const pinnedNotesList = [ ...filteredAndSortedNotes ].filter((note) => note.isPinned);
    const unPinnedNotesList = [ ...filteredAndSortedNotes ].filter((note) => !note.isPinned);

    return(
        <div className="flex-col">
            <SecondaryNav />
            {
                componentState.showTextEditor &&
                <NoteInputForm />
            }

            <div className="home-notes-list-wrapper">
                {
                    searching && 
                    <div className="home-notes-container">
                        <h2 className="home-list-heading">SEARCH RESULTS</h2>
                        {
                            searchedNotes.length <= 0 ?
                            <p className="search-note">The note that you are searching for does not exist.</p> :
                            <NotesList 
                                inputNotesArray={searchedNotes}
                            /> 
                        }
                    </div>
                }

                {
                    searching && searchedNotes.length > 0 &&
                    <div className="home-notes-container">
                        <h2 className="home-list-heading">SEARCHED NOTES</h2>
                        <NotesList 
                            inputNotesArray={searchedNotes}
                        />    
                    </div>
                }

                {
                    pinnedNotesList.length > 0 &&
                    <div className="home-notes-container">
                        <h2 className="home-list-heading">PINNED</h2>
                        <NotesList 
                            inputNotesArray={pinnedNotesList}
                        />    
                    </div>
                }

                {
                    allNotes.length > 0 &&
                    <div className="pinned-notes-container">
                        <h2 className="home-list-heading">{pinnedNotesList.length > 0 ? "OTHERS" : "ALL NOTES"}</h2>
                        <NotesList 
                            inputNotesArray={unPinnedNotesList}
                        />    
                    </div>
                }
            </div>
        </div>
    );
}

export { Home };