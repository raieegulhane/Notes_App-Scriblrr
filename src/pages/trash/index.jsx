import { useNote, useComponent } from "../../contexts";
import { NotesList, AddNoteButton, NoteInputForm } from "../../components";

const Trash = () => {
    const { noteState: { trashedNotes } } = useNote();
    const { componentState: { showTextEditor } } = useComponent();


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

            <AddNoteButton />
            {
                showTextEditor &&
                <NoteInputForm />
            }
        </div>
    );
}

export { Trash };