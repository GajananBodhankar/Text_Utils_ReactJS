import React,{useState} from "react";
import ReactJsAlert from "reactjs-alert";
function Alert(props) {
    
  return (
    <div>
      <ReactJsAlert status={props.status} Close={props.change} title={props.title} type={props.type}/>
    </div>
  );
}

export default Alert;
