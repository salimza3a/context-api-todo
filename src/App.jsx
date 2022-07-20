import { Fragment } from "react";
import Todo from "./ToDo";
import ToDoProvider from "./ToDoProvider";
function App() {
  return (
    <Fragment>
      <ToDoProvider>
        <Todo />
      </ToDoProvider>
    </Fragment>
  );
}

export default App;
