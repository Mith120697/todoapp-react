const TodoList = ({ todos, onUpdateTodo }) => {
  return (

    
    <div className="overflow-hidden">
      <p class="text-center mt-6" >To Do List</p>
    <ul>
      {todos.map((todo) => (
        <li
          class="list-group-item d-flex justify-content-between align-items-center h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500"
        >
          {todo.title}
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onUpdateTodo(todo)}
          />
        </li>
      ))}
    </ul>
    </div>
     
  );
};


export default TodoList;
