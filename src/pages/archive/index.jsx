import { SecondaryNav } from "../../components";
import { useNote } from "../../contexts/note-context";
import { NotesList } from "../../components/notes/notes-list";

const Archive = () => {
    const { noteState } = useNote();
    const { archivedNotes } = noteState;

    return(
        <div className="flex-col">
            <SecondaryNav />

            <NotesList 
                inputNotesArray={archivedNotes}
            />
        </div>
    );
}

export { Archive };