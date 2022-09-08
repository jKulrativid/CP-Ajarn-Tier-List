import TierTableView from "./TierTable";
import Header from "./Header";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <DndProvider backend={HTML5Backend}>
        <TierTableView></TierTableView>
      </DndProvider>
    </div>
  );
}

export default App;
