import "./notes-list.css";
import { NoteCard } from "../note-card"; 
import { useNote } from "../../../contexts/note-context";

const NotesList = () => {
    const { noteState } = useNote();
    const { allNotes } = noteState;

    return(
        <div className="notes-list-wrapper">
            <div className="notes-list-container flex-row flex_justify-center">
                {
                    allNotes.map((currentNote) => {
                        return(
                            <NoteCard 
                                key={currentNote._id}
                                currentNote={currentNote}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export { NotesList }