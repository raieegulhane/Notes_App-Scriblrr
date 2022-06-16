import "./styles/styles.css"
import { ToastContainer } from "react-toastify";
import { TopNav } from "./components";
import { SiteRoutes } from "./routes/site-routes";



function App() {
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
    </div>
  );
}

export default App;
