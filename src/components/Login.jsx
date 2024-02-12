import React from "react";
import Input from "./Input";
import textConstainer from "../textContainer";

const usernameType = textConstainer["input"]["username"]["type"]
const usernamePlaceholder = textConstainer["input"]["username"]["placeholder"]
const passwordType = textConstainer["input"]["password"]["type"]
const passwordPlaceHolder = textConstainer["input"]["password"]["placeholder"]

function Login(){
    return (
        <form className="form">
        <Input type={usernameType} placeholder={usernamePlaceholder}/>
        <Input type={passwordType} placeholder={passwordPlaceHolder}/>
        <button type="submit">Login</button>
      </form>
    )
}

export default Login