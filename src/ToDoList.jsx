import React,{useState} from 'react';

function ToDoList(){
const [tasks,setTasks]=useState([]);
const [newTask,setNewTask]=useState("");

function handleInputChange(event){
    setNewTask(event.target.value);

}
function addTask(){
    if(newTask!==""){
        setTasks(t=>[...tasks,newTask])
        setNewTask("");
    }


}
function deletetask(index){
const updatedTask=tasks.filter((_,i)=>i!==index);
setTasks(updatedTask);

}
function moveTaskUp(index){
    if(index>0)
    {
        const updateArr=[...tasks];
        [updateArr[index],updateArr[index-1]]=[updateArr[index-1],updateArr[index]];
        setTasks(updateArr);
    }

}
function moveTaskDown(index)
{
    if(index<tasks.length-1)
    {
        const updateTask=[...tasks];
        [updateTask[index],updateTask[index+1]]=[updateTask[index+1],updateTask[index]];
        setTasks(updateTask);
    }

}
    return(<>
    <div className="todo">
        <h1>To Do List</h1>
        <div> 
        <input type="text" 
        placeholder="Enter a Task.." 
        value={newTask} 
        onChange={handleInputChange}/>     
        <button className="add-button" onClick={addTask}>Add</button>    
        <ol>
            {tasks.map((item,index) => <li className="list-items"key={index}>
        <span className="list-item"> {item}</span>
        <div className="button-holder">
        <button className="delete-button" onClick={()=>deletetask(index)}>❌ </button>

        <button className="moveup-button" onClick={()=>moveTaskUp(index)}> ☝️</button>

        <button className="movedown-button" onClick={()=>moveTaskDown(index)}> 👇</button>
        </div>

            </li>
            )}
        </ol>          
         </div>
         </div>
    </>);
}
export default ToDoList