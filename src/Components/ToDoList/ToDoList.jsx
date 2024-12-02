import { useRef, useState } from 'react' ; 
import './ToDoList.css'



 export default function ToDoList(){
const[todos, setTodos] = useState([])
const inputRef = useRef()
const addToDo = () => {
    const text = inputRef.current.value;
    const newItem = { completed: false, text}
    setTodos([...todos,newItem])
    console.log(text);
    inputRef.current.value = "";
    
};
const handleItemDone = (index) => {
    
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)

}
console.log(todos)
const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
 

}

  return( 
     <div className='dl'> 
      <h2>To Do List</h2>
      <div className='todo'>
      <ul>
        {todos.map(({ text, completed}, index) => {
         return(
           
             <li className={completed ? "done" : ""} key={index} onClick={() => handleItemDone(index)}>{text}
                          <span onClick={() => handleDelete(index)}>✖</span>

             </li>
           

        );} )}
    

      </ul>
     
      <input ref={inputRef} placeholder='Eneter task...' />
      <button  onClick={addToDo}>Add</button>

        
    </div>
      </div>
      );

}