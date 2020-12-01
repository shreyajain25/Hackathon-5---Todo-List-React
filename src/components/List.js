import React, { useState } from "react";
import "./../styles/App.css";

function List(props)
{
        console.log("====")
        const [editTask, setEditTask] = useState(false);
        let [updatedtask, setUpdatedTask] = useState(props.task);

	const editTaskInList = (e) => {
		setUpdatedTask(e.target.value);
        }
        
	const isTaskToEdit = () =>{
                setEditTask(true);
	}
	return (
                <div className= "list">
                        {props.task}
                        <button className="edit" onClick={isTaskToEdit}>Edit</button>
                        <button className="delete">Delete</button>
                        
                        {editTask ? 
                        <React.Fragment>
                                <textarea  className="editTask" onChange={editTaskInList}></textarea>
                                <button className="saveTask" onClick={()=>{setEditTask(false)}}>Save</button>
                        </React.Fragment>
                        : null}
                </div>
	);
}
export default List;