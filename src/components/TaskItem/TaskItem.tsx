import {ITaskItemProps} from "./TaskItem.interfaces.ts";
import classes from './TaskItem.module.scss';
import TaskCheckbox from "../UI/TaskCheckbox/TaskCheckbox.tsx";
import {Clear} from "@mui/icons-material";
import React from "react";
const TaskItem = ({task, onCheckTask, onDeleteTask}: ITaskItemProps) => {

    const isChecked = task.isCompleted;
    const handleCheckTask = () => onCheckTask(task.id);
    const handleDeleteTask = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onDeleteTask(task.id);
    };
    return (
        <div className={classes.taskItem} style={classes} onClick={handleCheckTask} data-testid='taskitem'>
            <TaskCheckbox className={classes.taskItem__checkbox} checked={isChecked} onChange={handleCheckTask}/>
            <p className={classes.taskItem__text} data-iscompleted={task.isCompleted}>{task.text}</p>
            <button className={classes.taskItem__clearButton} onClick={handleDeleteTask}><Clear fontSize='small'/></button>
        </div>
    );
};

export default TaskItem;