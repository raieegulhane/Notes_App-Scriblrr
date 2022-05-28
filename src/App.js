import "./styles/styles.css"
import { TopNav } from "./components";
import { SiteRoutes } from "./routes/site-routes";


function App() {
  return (
    <div className="App">
      <TopNav />
      <SiteRoutes />
    </div>
  );
}

export default App;
