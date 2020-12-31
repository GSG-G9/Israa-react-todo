import React from 'react';

 const EditTodoForm =({todoText,handleSubmit,setUpdatedValue })=>{

    

  
    return(
        <form   className="todo-form">
            <input 
          className="todo-input"
            type='text'
            defaultValue={todoText}
         
            id='newInput'
            onChange={e=>setUpdatedValue(e.target.value)}
            />
            <button 
            className="todo-button"
            type='submit'
            value='  edit to-do '
           onClick={handleSubmit}
            > update to-do </button>
          
        </form>
    )
}
export default EditTodoForm