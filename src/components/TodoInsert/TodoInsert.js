import React, { Fragment, useCallback, useState, memo, useEffect } from 'react';

const TodoItem = ({onAdd}) => {
    const [inputValue, setInputValue] = useState('')

    const handleClick = useCallback((e) => {
        const eventFrom = e.target.className

        switch(eventFrom) {
            case 'add-button':
                onAdd(inputValue)
                setInputValue('')
                return
        }
    },[inputValue, onAdd])

    const handleChange = useCallback((e) => {
        const eventFrom = e.target.className
        const value = e.target.value

        switch(eventFrom) {
            case 'todo-insert':
                setInputValue(value)
                return
        }
    }, [])

    return <div data-testid='todo-insert'>
        <input value={inputValue} className={'todo-insert'} placeholder={'입력해 주세요'} onChange={handleChange} />
        <button className={'add-button'} onClick={handleClick}>ADD</button>
    </div>
};

export default memo(TodoItem);
