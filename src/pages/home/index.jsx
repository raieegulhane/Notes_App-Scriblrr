import "./home.css";
import { useComponent } from "../../contexts/component-context";
import { SecondaryNav, ColorPalette, NoteInputForm, NoteCard } from "../../components";

const Home = () => {
    const { state: componentState } = useComponent();
    return(
        <div>
            <SecondaryNav />
            {
                componentState.showTextEditor &&
                <NoteInputForm />
            }
        </div>
    );
}

export { Home };