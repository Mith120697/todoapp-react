
import "./App.css";
import React, { useEffect, useState } from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";


const App = () => {

  const [todos, setTodo] = useState ([]);
  useEffect(() => {
    fetchData();
    
  },[])

  const fetchData =  async () => {
    await fetch ('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((data) => setTodo(data))
    .catch((err) => {
    console.log(err);
    })
  } 
/* add */
  const onAdd = async (title) => {
    await fetch ('https://jsonplaceholder.typicode.com/todos', {
      method : 'POST', 
      body: JSON.stringify({
        title:title,
      }) ,
      headers: {
         "Content-type": "application/json; charset=UTF-8",
      }
    })
    .then((res) => {
      if (res.status !== 201){
        return
      }else{
            return res.json();        
          }       
        })
    .then((data) => {
      setTodo((todos) => [...todos,data]);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  /*update*/
  const onEdit = async (id, title) => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        title: title
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        // setUsers((users) => [...users, data]);
        const updatedTodo = todos.map((todo) => {
          if (todo.id === id) {
            todo.title = title;
          }

          return todo;
        });

        setTodo((todo) => updatedTodo);
      })
      .catch((error) => console.log(error));
  };

  /*Delete*/
  const onDelete = async (id) => {
    await fetch (`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE"
    })
    .then((res) => {
      if(res.status !== 200){
        return
      }else{
        setTodo(todos.filter((todo) => {
          return todo.id !== id;
       }))
    }
  })
    .catch((err) => {
      console.log(err);
    })
  }

 // console.log(todos)
  return (
    <div className="App">
    <h1>To Do List</h1>
    <br/>
    <AddTodo onAdd={onAdd}/>
    <div>
    {
      todos.map((todo) => (
      <Todo 
      id={todo.id} 
      key={todo.id} 
      title={todo.title} 
      onDelete={onDelete}
      onEdit={onEdit}
     />
     ))
    }
  </div>
  </div>
  )
}

export default App