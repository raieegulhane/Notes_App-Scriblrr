import { useNote } from "../../contexts/note-context";
import { NotesList } from "../../components/notes/notes-list";

const Trash = () => {
    const { noteState } = useNote();
    const { trashedNotes } = noteState;

    return(
        <div className="flex-col">
            <NotesList 
                inputNotesArray={trashedNotes}
            />
        </div>
    );
}

export { Trash };