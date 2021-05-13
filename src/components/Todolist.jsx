import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Todo from './Todo';
function Todolist () {
  const [todos, setTodos] = useState ([]);

  useEffect (() => {
    axios
      .get ('https://merntodolistapp.herokuapp.com/api')
      .then (response => {
        setTodos (response.data);
      })
      .catch (error => {
        console.log (error);
      });
  }, []);

  return (
    <div>
      <h3>Todo List</h3>
      <table className="table table-striped" style={{marginTop: 20}}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map ((todoitem, index) => {
            return (
              <Todo
                key={index}
                completed={todoitem.completed}
                description={todoitem.description}
                priority={todoitem.priority}
                id={todoitem._id}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Todolist;
