
import React, { useState } from 'react'

  const Todo = ({id,title,onDelete,onEdit}) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete =() => {
        onDelete(id);
    }

  const handleOnEditSubmit = (evt) => {
      evt.preventDefault();
      onEdit(id, evt.target.title.value);
      setIsEdit(!isEdit);
    };

  return (
    
    <ul>
    {isEdit ? (
      <form onSubmit={handleOnEditSubmit}>
        <input placeholder="Title" name="title" defaultValue={title}  className="w-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white rounded-lg text-center pb-2" />
        <button onSubmit={handleOnEditSubmit}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-30 " fill="none" viewBox="0 0 24 24" stroke="green" stroke-width="2">
         <path stroke-linecap="round" stroke-linejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
         </svg></button>
      </form>
    ) : (     
      <li className=" dark:bg-gray-700 dark:border-gray-600 dark:text-white rounded-lg flex justify-between items-center mr-40 ml-40" >
        <span >{title}</span>
        <div>
          <button onClick={handleEdit}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="green" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg></button>
          <button onClick={handleDelete}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#ffcccb" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg></button>
        </div>
      </li>
    )}
  </ul>
);
       
}

export default Todo