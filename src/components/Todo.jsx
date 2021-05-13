import React from 'react';
import {Link} from 'react-router-dom';
function Todo (props) {
  return (
    
      <tr>
        <td className={props.completed?'completed':null}>{props.description}</td>
        <td className={props.completed?'completed':null}>{props.priority}</td>
        <td>
          <Link to={'/edit/'+ props.id}>Edit</Link>
        </td>
      </tr>
    
  );
}
export default Todo;
