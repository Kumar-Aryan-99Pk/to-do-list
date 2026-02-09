import React, { useState } from "react";

export default function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTasks, setNewTasks] = useState("");

    function handleInputChange(event) {
        setNewTasks(event.target.value);
    }

    function addTask() {
        if (newTasks.trim() !== "") {
            setTasks(t => [...t, newTasks]);
        }
        setNewTasks("");
    }

    function removeTask(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    function moveTaskUp(index) {
        if (index > 0) {
            [tasks[index - 1], tasks[index]] = [tasks[index], tasks[index - 1]];
        }
        setTasks([...tasks]);
    }
    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            [tasks[index + 1], tasks[index]] = [tasks[index], tasks[index + 1]];
        }
        setTasks([...tasks]);
    }
    return (
        <div className="to-do-list">
            <h1 className="title">To-Do-List</h1>
            <input
                type="text"
                value={newTasks}
                placeholder="Enter a task"
                onChange={handleInputChange}
            />
            <button className="add-button"
                onClick={addTask}>Add</button>

            <ol>
                {tasks.map((t, index) => <li key={index}>
                    <span className="task-name">{t}</span>
                    <div className="actions">
                        <button className="delete-button" onClick={() => removeTask(index)}>Delete</button>

                        <button className="moveup" onClick={() => moveTaskUp(index)}>☝️</button>
                        <button className="movedown" onClick={() => moveTaskDown(index)}>👇</button>
                    </div>

                </li>)}
            </ol>
        </div>


    )
}