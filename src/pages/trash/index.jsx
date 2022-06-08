import { SecondaryNav } from "../../components";
import { useNote } from "../../contexts/note-context";
import { NotesList } from "../../components/notes/notes-list";

const Trash = () => {
    const { noteState } = useNote();
    const { deletedNotes } = noteState;

    return(
        <div className="flex-col">
            <NotesList 
                inputNotesArray={deletedNotes}
            />
        </div>
    );
}

export { Trash };