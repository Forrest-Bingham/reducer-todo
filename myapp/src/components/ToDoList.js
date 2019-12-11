import React, { useState, useReducer } from "react";
import ToDo from "./ToDo";

const ToDoList = ({ state, dispatch }) => {
  const List = () => {
    console.log(state, " To Do List ");
    return state.map((item, index) => {
      return <ToDo key={index} {...item} dispatch={dispatch} />;
    });
  };

  return (
    <>
      <h1>List of stuffs</h1>
      <div className="list">
        {List()}
        {/* {CompletedList()} */}
      </div>
    </>
  );
};

export default ToDoList;
