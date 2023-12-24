export default function Task (props) {

    const taskId = props.taskId;

    return(

        <tr key={props._id}>
        <td>{props.title}</td>
        <td>{props.description}</td>
        <td>{props.dueDate}</td>
        <td>{props.priority}</td>
        <td>{props.assignee}</td>
        <td>
          {props.status ? (
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
           value={props.progress}
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