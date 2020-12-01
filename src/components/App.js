import React, { useState } from "react";
import "./../styles/App.css";
import List from '../components/List';

function App()
{
	let [tasks, setTask] = useState([]);
	let [newTask, setNewTask] = useState("");
	
	const addTask = () => {
		tasks.push(newTask);
		setTask([...tasks]);
		setNewTask("");
		// setTask(task => [...task, newTask]);
	}
	
	const addTaskToList = (e) => {
		setNewTask(e.target.value);
	}
	return (
	<div id="main">
		<textarea  id="task" onChange={addTaskToList} value={newTask}></textarea>
		<button  id="btn" onClick={addTask} disabled={newTask.trim().length === 0}>Add Task to the List</button>
		{tasks.map((task, idx) => {
			{console.log(task)}
			<List task={task} key={idx} id={idx} />
		})}
	</div>
	);
}


export default App;
