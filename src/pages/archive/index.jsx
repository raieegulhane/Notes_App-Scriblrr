import "./archive.css";
import { useNote } from "../../contexts";
import { NotesList } from "../../components";


const Archive = () => {
    const { noteState } = useNote();
    const { archivedNotes } = noteState;

    return(
        <div className="home-notes-list-wrapper archived-list">
            {
                archivedNotes.length > 0 &&
                <div className="home-notes-container archived-list">
                    <h2 className="home-list-heading">ARCHIVED NOTES</h2>
                    <NotesList 
                        inputNotesArray={archivedNotes}
                    />    
                </div>
            }
            {
                archivedNotes.length <= 0 &&
                <p className="archived-note flex flex_justify-center flex_align-middle">
                    Archive folder is empty.
                </p> 
            }
        </div>
    );
}

export { Archive };