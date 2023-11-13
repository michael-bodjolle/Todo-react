import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import './App.css'
import Tasks from './components/tasks'
import DisplayTasks from './components/DisplayTasks'

function App() {
  const [Task, setTask] = useState("")
  const [currentList, setCurrentList] = useState([])
//  const  [currentTask, setcurrentTask] = useState("")

  // Quand on clique sur une task on sauvegarde son index 

  // En fonction du type d'événement on supprime ou on update l'index

  
  function handleClick(value){
    // console.log(value,'value');
      setCurrentList([...currentList, value]);
      // console.log(currentList, "currentList")
    }
    function handleUpdateClick(index, newValue ){

      console.log("clicked");
      const updatedList = [...currentList];
      updatedList[index] = newValue;
      setCurrentList(updatedList);
      
      setTask(newValue);

      // console.log(newValue);
 
}
function handleTaskChange(e){
  console.log(e.target.value);
  const newTask = e.target.value;
    // Create a new array with the updated item
    const updatedItems = currentList.map((item, index) => {
      if (currentList === index) { //toi pas d'id toi avoir index
        return { ...currentList, text: newText };
      }
      return item;
    });
    setTask(updatedItems)
}


    function handleDeleteClick(currentIndex){
      console.log(currentIndex,'toto')
      setCurrentList(currentList.filter((a,index) =>{
      return index !== currentIndex }))

    }

  // useEffect(()=>{
  //   console.log(currentList,"currentList Effect")
  // },)
  
return (
    <>
      <Navbar/>
      <Home/>
      <Tasks handleClick={handleClick} addtaskbutton={"Add task"} />
      <h1>Tasks list</h1>
      {currentList.map((list, index) => (
       <DisplayTasks key={index} 
       index={index} 
       newtask={list}
       handleUpdateClick={handleUpdateClick} 
       handleTaskChange={handleTaskChange} 
       handleDeleteClick={handleDeleteClick}/> 
      ))}
      

    </>
  )
}

export default App
