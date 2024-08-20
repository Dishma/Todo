import React, { useEffect, useRef, useState } from 'react';
import todogif from '../assets/todogif.gif';
import TodoItems from './TodoItems';

const Todo = () => {

  const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    console.log(inputText);

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    }

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  }

  const deleteTodo = (id) => {
    setTodoList((prvTodo) => {
      return prvTodo.filter((todo) => todo.id !== id);
    });
  }

  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  }

  const clearInput = () => {
    inputRef.current.value = ""; // Clear the input field
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='bg-transparent max-w-md flex flex-col p-7 min-h-[550px] min-w-[550px] rounded-xl'>

        {/* Title */}
        <div className='flex justify-center items-center mt-7 gap-2 '>
          <img src={todogif} alt="todo" className="w-[100px]" />
          <h1 className='text-3xl font-semibold'>To-do List</h1>
        </div>

        {/* Todo input */}
        <div className='flex items-center my-7 bg-gray-200 rounded-lg'>
          <input
            ref={inputRef}
            type="text"
            className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600'
            placeholder='Add your task'
          />
          <button onClick={add} className='border-none rounded-lg bg-cyan-500 w-12 h-12 text-white text-lg font-medium cursor-pointer ml-2'>
            Add
          </button>
          <button onClick={clearInput} className='border-none rounded-lg bg-cyan-500 w-12 h-12 text-white text-lg font-medium cursor-pointer mr-1 ml-1'>
            Clear
          </button>
        </div>

        {/* Todo list */}
        <div>
          {todoList.map((item, index) => {
            return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle} />
          })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
