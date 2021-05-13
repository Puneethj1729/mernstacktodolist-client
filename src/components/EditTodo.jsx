import React, {useState, useEffect} from 'react';
import {useParams, Redirect} from 'react-router-dom';
import axios from 'axios';

function EditTodo () {
  const {id} = useParams ();
  const [formSuccess, setSuccess] = useState (false);
  const [edit, setEdit] = useState ({
    description: '',
    priority: '',
    completed: false,
  });
  useEffect (() => {
    axios
      .get ('/api/' + id)
      .then (response =>
        setEdit ({
          description: response.data.description,
          priority: response.data.priority,
          completed: response.data.completed,
        })
      )
      .catch (error => {
        console.log (error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function handleDescription (event) {
    const {name, value} = event.target;
    setEdit (edit => {
      return {
        ...edit,
        [name]: value,
      };
    });
  }

  function handleCompleted (event) {
    // eslint-disable-next-line

    const {name, value} = event.target;
    console.log(value);
    setEdit (edit => {
      return {
        ...edit,
        [name]: !edit.completed,
      };
    });
  }
  function handlePriority (event) {
    const {name, value} = event.target;
    setEdit (edit => {
      return {
        ...edit,
        [name]: value,
      };
    });
  }
  function handleSubmit (event) {
    event.preventDefault ();
    const item = {
      description: edit.description,
      completed: edit.completed,
      priority: edit.priority,
    };
    
    axios
      .post ('/api/update/' + id, item)
      .then (response => setSuccess (true));
  }
  
  if (formSuccess) {
    return (<Redirect to="/" />);
  } else {
    return (
      <div>
        <h3>Update Item</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              name="description"
              value={edit.description}
              onChange={handleDescription}
            />
          </div>
          <br />
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priority"
                id="priorityLow"
                value="Low"
                checked={edit.priority === 'Low'}
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
                value="Medium"
                checked={edit.priority === 'Medium'}
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
                checked={edit.priority === 'High'}
                onChange={handlePriority}
              />
              <label className="form-check-label">High</label>
            </div>
          </div>
          <br />
          <div className="form-check">
            <input
              className="form-check-input"
              id="completedCheckbox"
              type="checkbox"
              name="completed"
              onChange={handleCompleted}
              checked={edit.completed}
              value={edit.completed}
            />
            <label className="form-check-label" htmlFor="completedCheckbox">
              Completed
            </label>
          </div>
          <br />

          <div className="form-group">
            <button type="submit" className="btn btn-primary">Update</button>
          </div>

        </form>
      </div>
    );
  }
}
export default EditTodo;
