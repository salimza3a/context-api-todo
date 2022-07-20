import { createContext, useReducer } from "react";

export const MyToDoContext = createContext();

const initialState = {
  values: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { values: [...state.values, action.payload] };
    case "DELETE_TODO":
      return { values: state.values.filter((item) => item !== action.payload) };
    default:
      return state;
  }
}

function ToDoProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyToDoContext.Provider value={[state, dispatch]}>
      {props.children}
      <h2>wtf</h2>
    </MyToDoContext.Provider>
  );
}

export default ToDoProvider;

//Todo provider bug while saving this page the autolive gives error but when
//you refresh the page manually everything come back normal
