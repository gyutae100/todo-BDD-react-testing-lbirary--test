import React from 'react';
import TodoItem from '../TodoItem'

const TodoItemList = ({todos, onToggle, onModify, onDelete}) => {

    return <div data-testid='todo-item-list'>
        {todos.map((todo, index)=> {
        return <TodoItem key={index} todo={todo} onToggle={onToggle} onModify={onModify} onDelete={onDelete} />
        })}
        </div>
};

export default TodoItemList;