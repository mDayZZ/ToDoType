import classes from './TaskCheckbox.module.scss';
import React from "react";
import {Check} from "@mui/icons-material";


type TaskCheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

const TaskCheckbox = (props: TaskCheckboxProps) => {
    return (
        <label className={classes.taskCheckbox__container}>
            <input className={classes.taskCheckbox__input} type="checkbox" {...props}/>
            <span className={classes.taskCheckbox__checkmark}><Check fontSize='small'/></span>
        </label>
    );
};

export default TaskCheckbox;