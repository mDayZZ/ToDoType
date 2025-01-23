import React from "react";
import classes from "./Input.module.scss";
import clsx from "clsx";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = ({className, ...props}: InputProps) => {
    return (
        <input className={clsx(classes.Input, className)} {...props}/>
    );
};

export default Input;