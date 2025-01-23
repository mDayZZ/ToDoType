import React from "react";
import classes from "./Input.module.scss";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = (props: InputProps) => {
    return (
        <input className={classes.Input} {...props}/>
    );
};

export default Input;