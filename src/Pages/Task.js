import { useNavigate } from 'react-router-dom';

export default function Task (props) {

    const navigate = useNavigate();

    const taskId = props.taskId;
    const title = props.title;
    const description = props.description;
    const dueDate = props.dueDate;
    const priority = props.priority;
    const assignee = props.assignee;
    const status = props.status;
    const progress = props.progress;


    function navigateToTaskDetails() {

      navigate('/taskdetails', { state: {taskId, title, description, dueDate, priority, assignee, status, progress} });
    
    }

    return(

        <tr key={taskId} onClick = {navigateToTaskDetails}>
        <td>{title}</td>
        <td>{description}</td>
        <td>{dueDate}</td>
        <td>{priority}</td>
        <td>{assignee}</td>
        <td>
          {status ? (
           <p className="text-success">Completed</p>
          ) : (
           <p className="text-danger">Pending</p>
          )}
        </td>
        <td>
          <input
           type="range"
           min="0"
           max="100"
           value={progress}
           onChange={(e) => {
            e.preventDefault(); 
            props.handleProgressChange(taskId, e.target.value);
          }}
          />
        </td>
        <td>
          <input
           type="checkbox"
           checked={props.status}
           onChange={() => props.handleCheck(taskId)}
          />
        </td>
      </tr>
    ); 
};