import React from 'react';
import TodoForm from './TodoForm';

const AddEditTodo = () => {
  return (
    <React.Fragment>
      <div className='addEditTodo row'>
        <h3>
            Add/Edit Todo
        </h3>
      </div>
      <TodoForm />
    </React.Fragment>
  );
}
export default AddEditTodo;
