import "./App.css";
import Basics from "./Basics";
import PropChangedEffect from "./PropChangedEffect";
import StateChangeEffect from "./StateChangeEffect";

function App() {
  return (
    <>
      <h1>Use Effect</h1>
      <Basics />
      <StateChangeEffect />
      <PropChangedEffect userID={1} />
    </>
  );
}

export default App;
