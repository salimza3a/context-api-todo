import { useRef, useContext } from "react";
import ToDoItem from "./ToDoItem";
import { v4 as uuidv4 } from "uuid";
import { MyToDoContext } from "./ToDoProvider";

function ToDo() {
  const inputValue = useRef();

  const [state, dispatch] = useContext(MyToDoContext);

  function addValue() {
    const todoValue = inputValue.current.value;
    if (!todoValue.trim()) return;
    dispatch({
      type: "ADD_TODO",
      payload: todoValue,
    });
    inputValue.current.value = "";
  }

  const wholeToDos = state.values.map((todo) => (
    <ToDoItem key={uuidv4()} value={todo} />
  ));
  return (
    <>
      <input type="text" placeholder="text goes here" ref={inputValue} />
      <button onClick={addValue}>Add</button>
      {wholeToDos}
    </>
  );
}

export default ToDo;
