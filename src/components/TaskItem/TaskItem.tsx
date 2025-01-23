import {ITaskItemProps} from "./TaskItem.interface.ts";
import classes from './TaskItem.module.scss';
import TaskCheckbox from "../UI/TaskCheckbox/TaskCheckbox.tsx";
const TaskItem = ({task, onCheckTask}: ITaskItemProps) => {

    const isChecked = task.isCompleted;
    const handleCheckTask = () => onCheckTask(task.id);

    return (
        <div className={classes.taskItem} style={classes}>
            <TaskCheckbox checked={isChecked} onChange={handleCheckTask}></TaskCheckbox>
            <p>{task.text}</p>
        </div>
    );
};

export default TaskItem;