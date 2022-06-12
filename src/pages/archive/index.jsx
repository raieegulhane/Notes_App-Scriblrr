import { useNote } from "../../contexts";
import { SecondaryNav, NotesList } from "../../components";


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