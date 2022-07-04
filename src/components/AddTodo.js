import React from 'react'

const AddTodo = ({onAdd,onUpdate}) => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.title.value);
    e.target.title.value = "";
    
}
  return (
    <div>
      
        <form onSubmit={handleOnSubmit} className="mb-4" >
            <input placeholder="Enter a To Do..." name="title" class="h-10 bg-gradient-to-r from-gray-500 to-green-500 rounded-lg text-center placeholder-black" required/>
            <span><button onSubmit={handleOnSubmit}><span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg></span></button></span>
        </form>

    </div>
  )
}

export default AddTodo