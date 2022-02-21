import React, {ChangeEvent, CSSProperties, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
<<<<<<< HEAD

>>>>>>> withViktor
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
<<<<<<< HEAD
    changeStatusIsDone: (id: string, isDone:boolean) => void
=======
    changeTaskStatus: (id: string, isDone: boolean) => void
>>>>>>> withViktor
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    const [error, setError] = useState<boolean>(false)
    const errorMessageStyle: CSSProperties = {backgroundColor: 'red', color: 'white', textAlign: 'center'}
    const errorMessage = error ? <div style={errorMessageStyle}>Title is required</div> : null

    const addTask = () => {
        const trimmedTitle = title.trim()
        trimmedTitle ? props.addTask(trimmedTitle) : setError(true)

        setTitle("");
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(false)
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

<<<<<<< HEAD
=======
    // const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>, task:any) => {
    const changeTaskStatus = (id: string, isDone: boolean) => {

        props.changeTaskStatus(id, isDone)
    }
>>>>>>> withViktor

    const taskList = props.tasks.length !== 0
        ? <ul>
            {
                props.tasks.map(t => {

                    const removeTask = () => props.removeTask(t.id)

                    const spanClassName = `task ${t.isDone ? 'task-completed' : ''}`

                    return (
                        <li key={t.id}>
<<<<<<< HEAD
                            <input type="checkbox" checked={t.isDone} onChange={() => props.changeStatusIsDone(t.id, t.isDone)}/>
=======
                            <input type="checkbox" checked={t.isDone}
                                // onChange={(e) => props.changeTaskStatus(t.id, e.currentTarget.checked)}/>
                                      onChange={(e) => changeTaskStatus(t.id, e.currentTarget.checked )}/>
>>>>>>> withViktor
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
                   className={error ? 'error' : ""}
            />
            <button onClick={addTask}>+</button>
            {errorMessage}
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
