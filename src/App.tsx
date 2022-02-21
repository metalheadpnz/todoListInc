import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
// test2
export type FilterValuesType = "all" | "active" | "completed";

function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ]);

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id != id);
        setTasks(filteredTasks);
    }

    function addTask(title: string) {
        let task = {id: v1(), title: title, isDone: false};
        let newTasks = [task, ...tasks];
        setTasks(newTasks);
    }

<<<<<<< HEAD
    function changeStatusIsDone(id: string, status: boolean) {
        tasks.forEach((t) => {
            if (t.id === id) {
                t.isDone = !t.isDone
            }
        })
        setTasks([...tasks])
=======
    const changeTaskStatus = (id: string, isDone: boolean) => {
        setTasks(tasks.map((t) => id === t.id ? {...t, isDone: isDone} : t))
>>>>>>> withViktor
    }

    let [filter, setFilter] = useState<FilterValuesType>("all");

    let tasksForTodolist = tasks;

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }


    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      filter={filter}
<<<<<<< HEAD
                      changeStatusIsDone={changeStatusIsDone}/>
=======
                      changeTaskStatus={changeTaskStatus}/>
>>>>>>> withViktor
        </div>
    );
}

export default App;
