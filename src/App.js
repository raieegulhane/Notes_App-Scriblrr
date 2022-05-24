import "./styles/styles.css"
import SiteRoutes from "./routes/site-routes";
import { TopNav } from "./components";


function App() {
  return (
    <div className="App">
      <TopNav />
      <SiteRoutes />
    </div>
  );
}

export default App;
