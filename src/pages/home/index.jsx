import "./home.css";
import { useComponent } from "../../contexts/component-context";
import { SecondaryNav, NoteInputForm } from "../../components";
import { NotesList } from "../../components/notes/notes-list";
import { NoteCard } from "../../components";

const Home = () => {
    const { componentState } = useComponent();
    return(
        <div className="flex-col">
            <SecondaryNav />
            
            {
                componentState.showTextEditor &&
                <NoteInputForm />
            }

            <div>
            <NotesList />
            </div>
        </div>
    );
}

export { Home };