import "./notes-list.css";
import { NoteCard } from "../note-card"; 

const NotesList = ({ inputNotesArray }) => {
    return(
        <div className="notes-list-wrapper">
            <div className="notes-list-container flex-row flex_justify-center">
                {
                    inputNotesArray.map((currentNote) => {
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