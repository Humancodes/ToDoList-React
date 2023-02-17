import React from "react";


const toDoLists = (props)=>{


    

    return( 
        <>
        <div className="todo_style">
        <span onClick={()=>{props.onSelect(props.id)}}>x</span>
        <li>{props.ListItems}</li>
        </div>
        </>
    )
}

export default toDoLists;