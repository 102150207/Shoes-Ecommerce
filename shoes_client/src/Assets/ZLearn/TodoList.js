import React from 'react'
import PropTypes from 'prop-types'

const TodoList = (props) => {
    const {todos, onTodoClick} = props
    const handleonChangeColor = (item)=> {
        if(!onTodoClick) return;
        onTodoClick(item)
    }

    return (
        <ul className = 'todo-list'> 
            {
                todos && todos.map(item =>(
                    <li key = {item.id} onClick = {() =>handleonChangeColor(item)}>
                        {item.value}
                    </li>
                ))
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos : PropTypes.array,
    onTodoClick : PropTypes.func
};

TodoList.defaultProps = {
    todos : [],
    onTodoClick : null
};
export default TodoList
