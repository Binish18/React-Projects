import React, { useState } from 'react'
import './Todo.css'
import {AiFillDelete} from 'react-icons/ai'

const Todo = () => {
    const [input ,setInput] = useState(); //state set kia input field ka state check kar sake 
    const [list,setList] = useState([]);   // todo list 
    const add =()=>{
    setList([...list,input]);     // jo input mn hai usko list mn add kardo
    setInput(""); //input blank kardo
    }
    const deleteItem = (index)=>{
        const newList = ([...list]);    // list ky sary elemens copy karky naye var mn daly 
        newList.splice(index,1);      // is sy remove karta index mn from new list 1 is ik ky item delete hoti
        setList([...newList]);  // updates the state by the newlist array 
      
        // console.log("delete")
    }
    
  return (
    <>
       <div className='d-flex justify-content-center mt-5'>
       <input type="text" class="form-control w-25 me-2"  value={input} aria-describedby="emailHelp" placeholder='Enter your todo' onChange={
        (e)=>{
            setInput(e.target.value)
        }
       }
       />
       <button className='btn btn-primary rounded-circle text-center' onClick={add}>+</button>

  
   
        </div> 
        <div class="container mt-3 w-25 d-flex justify-content-center" >
 
        <ul class="list-group w-100 me-4">
        {list.map((item, index) => (
          <li key={index} class="list-group-item text-start mt-3" style={{backgroundColor:"#A71666" ,color:"white"}}>
            {item} 
         
          <AiFillDelete className='float-end mt-0 ms-2' size={20} onClick={deleteItem}/>
         
          </li>
        ))}
      </ul>
</div>
        
    </>
  )
}

export default Todo

