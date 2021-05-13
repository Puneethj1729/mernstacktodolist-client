
import React, {useState} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';
function CreateTodo () {
  const [formSuccess,setSuccess]=useState(false);
  const [create, setCreate] = useState ({
    description: '',
    priority: '',
    completed: false,
  });
  function handleDescription (event) {
    const {name, value} = event.target;
    
    setCreate (create => {
      return {
        ...create,
        [name]: value,
      };
    });
  }
  function handlePriority (event) {
    const {name, value} = event.target;
    setCreate (create => {
      return {
        ...create,
        [name]: value,
      };
    });
  }
  function handleSubmit (event) {
    event.preventDefault ();

    console.log ('Form submitted:');
    
    const todo={
      description:create.description,
      priority:create.priority,
      completed:create.completed
    }
    axios.post('https://merntodolistapp.herokuapp.com/api/add',todo).then(res => setSuccess(true));
    
    setCreate ({
      description: '',
      priority: '',
      completed: false,
    });
    

  }
  if (formSuccess){
    return <Redirect to="/"/>
  }
  else{
  return (
    <div style={{marginTop: 20}}>
      <h3>Create New Task</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            name="description"
            className="form-control"
            value={create.description}
            onChange={handleDescription}
          />
        </div>
        <br/>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priority"
              id="priorityLow"
              value="Low"
              checked={create.priority === 'Low'}
              onChange={handlePriority}
            />
            <label className="form-check-label">Low</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priority"
              id="priorityMedium"
              value='Medium'
              checked={create.priority === 'Medium'}
              onChange={handlePriority}
            />
            <label className="form-check-label">Medium</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priority"
              id="priorityHigh"
              value="High"
              checked={create.priority === 'High'}
              onChange={handlePriority}
            />
            <label className="form-check-label">High</label>
          </div>
        </div>
        <br/>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>

      </form>
    </div>
  )}
}
export default CreateTodo;
