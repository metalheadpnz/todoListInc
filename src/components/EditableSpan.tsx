import React, {ChangeEvent, useState} from 'react';

type propsTypes = {
    oldTitle: string
    callBack: (title: string) => void
}

export const EditableSpan: React.FC<propsTypes> = (props) => {
    const [edit, setEdit] = useState(false)
    let [newTitle, setNewTitle] = useState(props.oldTitle)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const onBlurHandler = () => {
        props.callBack(newTitle)
        setEdit(false)
    }
    const onDoubleClickHandler = () => {
        setEdit(true)
    }
    return edit
        ? <input
            value={newTitle}
            onChange={onChangeHandler}
            type="text"
            onBlur={onBlurHandler}
            autoFocus/>
        : <span onDoubleClick={onDoubleClickHandler}>{props.oldTitle}</span>
};