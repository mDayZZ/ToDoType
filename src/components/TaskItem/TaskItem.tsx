import {ITaskItemProps} from "./TaskItem.interface.ts";
import classes from './TaskItem.module.scss';
import TaskCheckbox from "../UI/TaskCheckbox/TaskCheckbox.tsx";
const TaskItem = ({task}: ITaskItemProps) => {
    return (
        <div className={classes.taskItem} style={{display: 'flex',}}>
            <TaskCheckbox/>
            <p>{task.text}</p>
        </div>
    );
};

export default TaskItem;