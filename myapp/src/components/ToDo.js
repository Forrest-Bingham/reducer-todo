import React from "react";

const ToDo = props => {
  return (
    <div
      className="item"
      style={{
        textDecoration: props.completed ? "underline" : "none",
        color: props.completed ? "white" : "black",
        border: props.completed ? "1px solid green" : "1px solid red",
        background: props.completed ? "green" : "red",
        fontSize: props.completed ? "18px" : "18px"
      }}
    >
      <p
        onClick={() =>
          props.dispatch({
            type: "TOGGLE_COMPLETED",
            payload: props.id
          })
        }
        className="toDo"
      >
        {props.item}
      </p>
    </div>
  );
};

export default ToDo;
