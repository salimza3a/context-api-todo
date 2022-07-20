import { useContext } from "react";
import { MyToDoContext } from "./ToDoProvider";

function ToDoItem(props) {
  const [state, dispatch] = useContext(MyToDoContext);
  function deleteValue(param) {
    dispatch({
      type: "DELETE_TODO",
      payload: param,
    });
  }

  return (
    <>
      <li>
        {props.value}{" "}
        <button onClick={() => deleteValue(props.value)}>X</button>
      </li>
    </>
  );
}

export default ToDoItem;
