import React from 'react';
import TodoForm from './TodoForm';
import PropTypes from 'prop-types';
import generateTodoId from './utils/generateId';
import TodoModel from './utils/Todo.model';

const AddEditTodo = (props) => {

  const submitTodo = (description, date, completed) => {
    const _id = generateTodoId();
    const newTodo = new TodoModel(_id, description, date?.toISOString(), completed);
    props.submitTodo(newTodo)
  }

  return (
    <React.Fragment>
      <div className='addEditTodo row'>
        <h3>
            Add/Edit Todo
        </h3>
      </div>
      <TodoForm submitTodo={submitTodo}/>
    </React.Fragment>
  );
}
AddEditTodo.propTypes={
  submitTodo: PropTypes.func.isRequired
}
export default AddEditTodo;
