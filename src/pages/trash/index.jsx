import { useNote } from "../../contexts/note-context";
import { NotesList } from "../../components/notes/notes-list";

const Trash = () => {
    const { noteState } = useNote();
    const { trashedNotes } = noteState;

    return(
        <div className="home-notes-list-wrapper archived-list">
            {
                trashedNotes.length > 0 &&
                <div className="home-notes-container archived-list">
                    <h2 className="home-list-heading">TRASHED NOTES</h2>
                    <NotesList 
                        inputNotesArray={trashedNotes}
                    />    
                </div>
            }
            {
                trashedNotes.length <= 0 &&
                <p className="archived-note flex flex_justify-center flex_align-middle">
                    Trash folder is empty.
                </p> 
            }
        </div>
    );
}

export { Trash };