import React from 'react';

const TodoItem = (props) => {
  return (
    <div className="todo-item">
      {props.state.map(todo => {
        return (
          <div style={todo.completed ? {textDecoration: 'line-through', color: 'black'} : null} key={todo.id}>
            <h3 onClick={() => {
              props.dispatch({ type: 'TOGGLE_TODO', payload: todo.id})
            }}>{todo.item}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default TodoItem;