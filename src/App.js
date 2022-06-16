import "./styles/styles.css"
import { ToastContainer } from "react-toastify";
import { useComponent } from "./contexts";
import { TopNav, NoteInputForm } from "./components";
import { SiteRoutes } from "./routes/site-routes";



function App() {
  const { componentState, componentDispatch } = useComponent();
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <TopNav />
      <SiteRoutes />

      <button 
          className="btn add-note-floating btn-floating btn-rd btn-primary"
          onClick={() => componentDispatch({type: "SHOW_TEXT_EDITOR"})}
      >
          +
      </button>

      {
          componentState.showTextEditor &&
          <NoteInputForm />
      }
    </div>
  );
}

export default App;
