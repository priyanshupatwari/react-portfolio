import React, { useReducer, useState } from 'react'

function reducer(state, action) {
 switch (action.type) {
  case 'add-todo':
   return {
    todos: [...state.todos, { text: action.text, completed: false }],
    todoCount: state.todoCount + 1
   }
  case 'toggle-todo':
   return {
    todos: state.todos.map(
     (elem, index) => index === action.index ? { ...elem, completed: !elem.completed } : elem
    ),
    todoCount: state.todoCount
   }
  default:
   return state;
 }
}
const Reducer = () => {
 const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
  todos: [],
  todoCount: 0
 });
 const [text, setText] = useState();
 return (
  <>
   <form
    onSubmit={(e) => {
     e.preventDefault();
     dispatch({ type: 'add-todo', text: text });
     setText("");
    }
    }
   >
    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    <button type='submit'>Submit</button>
   </form>
   <div>Number of todos: {todoCount}</div>
   <ol>
    {
     todos.map((elem, index) => (
      <li
       key={elem.text}
       onClick={() => dispatch({ type: 'toggle-todo', index })}
       style={{ textDecoration: elem.completed ? "line-through" : "" }}
      >
       {elem.text}
      </li>
     ))
    }
   </ol>
   <pre>{JSON.stringify(todos, null, 2)}</pre>

  </>
 )
}

export default Reducer
//1 33 00
