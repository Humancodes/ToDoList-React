import React, { useState } from "react";
import "./index.css"
import ToDoList from "./ToDoList";
function App() {
  const [text,setText] = useState("");
  const [items,setItem] = useState([]);

  const inputText = (event)=>{
    const newValue = event.target.value;
    setText(newValue);
  }
  const additems = ()=>{
    setItem(preValue=>{
      return[...preValue,text]
    });
    setText("");
  }

  const deleteItems = (id)=>{
    setItem((preValue)=>{
      return preValue.filter((arrEle,index)=>{
        return index!== id;
      }
    )})
  }

  return (
    <>
      <div className="main_div">
        <div className="centre_div">
              <h1>ToDO List</h1>
              <input type="text" placeholder="Add a item" onChange={inputText} value={text}/>
              <button onClick={additems}>+</button>
      <ul>
      {items.map((listItems,index)=>{
        return <ToDoList 
        key={index} 
        id={index} 
        ListItems={listItems}
        onSelect={deleteItems} //function is passed as a property we will use it to delete items
        />
      })}

      </ul>
      </div>
      </div>
    </>
  );
}

export default App;
