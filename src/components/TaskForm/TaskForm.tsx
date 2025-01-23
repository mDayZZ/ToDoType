import classes from './TaskForm.module.scss';
import {KeyboardArrowDown} from "@mui/icons-material";
import Input from "../UI/Input/Input.tsx";
import React, {useState} from "react";
import {ITaskFormProps} from "./TaskForm.interfaces.ts";
const TaskForm = ({onAddTask}: ITaskFormProps) => {
    const [newTaskText, setNewTaskText] = useState<string>('')
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setNewTaskText(e.target.value);
    }
    const handleAddTask = (e: React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        if (!newTaskText) {
            return;
        }
        onAddTask(newTaskText);
        setNewTaskText('');
    };

    return (
        <form className={classes.taskForm} onSubmit={(e) => handleAddTask(e)}>
            <button className={classes.taskForm__button}>
                <KeyboardArrowDown/>
            </button>
            <Input className={classes.taskForm__input} required placeholder='What needs to be done' value={newTaskText} onChange={handleInputChange}/>
        </form>
    );
};

export default TaskForm;