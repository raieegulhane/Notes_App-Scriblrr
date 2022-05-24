import "./styles/styles.css"
import SiteRoutes from "./routes/site-routes";
import { SideNav, TopNav } from "./components";


function App() {
  return (
    <div className="App">
      <TopNav />
      <SideNav />
    </div>
  );
}

export default App;
