import React from 'react';

export const TodoForm =({inputValue,setInputValue,todos,setTodos,todoStatus,setTodoStatus})=>{

    const handleSubmit=(e)=>{
        console.log('todo')
        e.preventDefault();
         setTodos(todos = [...todos,{
            text:inputValue,
            completed :false,
            id:Math.random()*1000
        }])
        console.log(todos)
        setInputValue('')
    }

const statusHandler=(e)=>{
   setTodoStatus(e.target.value)
}

    return(
        <form className="todo-form">
            <input 
            className="todo-input"
            type='text'
            value={inputValue}
            id='input'
            onChange={e=>setInputValue(e.target.value)}
            />
            <button 
            className="todo-button"
            type='submit'
            value='  Add to-do '
           onClick={handleSubmit}
            >  Add to-do </button>
         
              <select name="todo_status" className="todo-filter" onChange={statusHandler}>
                  <option class="options" value=''>All</option>
                  <option class="options"value={true} >Completed</option>
                  <option class="options"value={false}>Uncompleted</option>
              </select>
         
        </form>
    )
}