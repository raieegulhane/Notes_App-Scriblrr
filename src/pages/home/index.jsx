import "./home.css";
import { useComponent } from "../../contexts/component-context";
import { SecondaryNav, NoteInputForm } from "../../components";

const Home = () => {
    const { componentState } = useComponent();
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