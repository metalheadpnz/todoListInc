import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
//add to DIY git test
type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    filter: FilterValuesType
    changeStatusIsDone: (id: string, isDone:boolean) => void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")

    const addTask = () => {
        props.addTask(title);
        setTitle("");
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const onAllClickHandler = () => props.changeFilter("all");
    const onActiveClickHandler = () => props.changeFilter("active");
    const onCompletedClickHandler = () => props.changeFilter("completed");


    const taskList = props.tasks.length !== 0
        ? <ul>
            {
                props.tasks.map(t => {

                    const removeTask = () => props.removeTask(t.id)

                    const spanClassName = `task ${t.isDone ? 'task-completed' : ''}`

                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone} onChange={() => props.changeStatusIsDone(t.id, t.isDone)}/>
                            <span className={spanClassName}>{t.title}</span>
                            <button onClick={removeTask}>x</button>
                        </li>
                    )
                })
            }
        </ul>
        : <span style={{color: 'cyan', backgroundColor: 'red'}}>пусто</span>


    return <div>
        <h3>{props.title}
            <div className='filter-header'>{props.filter}</div>
        </h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTask}>+</button>
        </div>
        {taskList}
        <div>
            <button
                className={props.filter === 'all' ? 'button-active' : ""}
                onClick={onAllClickHandler}>All
            </button>
            <button
                className={props.filter === 'active' ? 'button-active' : ""}
                onClick={onActiveClickHandler}>Active
            </button>
            <button
                className={props.filter === 'completed' ? 'button-active' : ""}
                onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}
