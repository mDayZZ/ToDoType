import classes from './TaskCheckbox.module.scss';
import React from "react";
import {Check} from "@mui/icons-material";
import clsx from "clsx";


type TaskCheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

const TaskCheckbox = ({className, ...props}: TaskCheckboxProps) => {
    return (
        <label className={clsx(classes.taskCheckbox__container, className)}>
            <input className={classes.taskCheckbox__input} type="checkbox" {...props}/>
            <span className={classes.taskCheckbox__checkmark}><Check fontSize='small'/></span>
        </label>
    );
};

export default TaskCheckbox;