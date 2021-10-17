import "./App.css";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <div className="App">
      <div>
        <AddTask />
      </div>
      <div className="list">
        <TaskList />
      </div>
    </div>
  );
}

export default App;
