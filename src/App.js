import './App.css';
import React from 'react';
import {Card, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Todo from './Todo';
import FormTodo from './FormTodo';

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "un todo pour tester",
      isDone: false
    }
  ])
  const addTodo = text =>{
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  }
  const markTodo = index =>{
    const newTodos = [...todos];
    newTodos[index].isDone=true;
    setTodos(newTodos);
  }
  const deleteTodo = index =>{
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center mb-4"> Todo List</h1>
        <FormTodo addTodo={addTodo} />
          <div>
            {todos.map((todo, index)=>(
              <Card>
                <Card.Body>
                  <Todo 
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  deleteTodo={deleteTodo}
                  />
                </Card.Body>
              </Card>
            ))}
          </div>
      </div>
    </div>
  );
}

export default App;
