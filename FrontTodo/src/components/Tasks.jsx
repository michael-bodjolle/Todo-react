import { useState } from 'react'
// state task ici



// on click on update la liste des taches du parent 
function Tasks(props){
    const [newTask, setNewTask] = useState("") 
// handleclick ici 

    return(

    <div className="addfiled">
   <input className="inputaddtask" onChange={(e)=>{setNewTask(e.target.value)}} />
   <button className="addbutton" onClick={()=>{props.handleClick(newTask)}}>{props.addtaskbutton} </button>
   </div>
   
    )

}

export default Tasks