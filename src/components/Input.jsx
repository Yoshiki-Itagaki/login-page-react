import React from "react";

function Input(entry){
    return (       
        <input type={entry.type} placeholder={entry.placeholder} />   
    )
}

export default Input