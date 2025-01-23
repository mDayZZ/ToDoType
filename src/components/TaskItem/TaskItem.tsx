import {ITaskItemProps} from "./TaskItem.interfaces.ts";
import classes from './TaskItem.module.scss';
import TaskCheckbox from "../UI/TaskCheckbox/TaskCheckbox.tsx";
const TaskItem = ({task, onCheckTask}: ITaskItemProps) => {

    const isChecked = task.isCompleted;
    const handleCheckTask = () => onCheckTask(task.id);

    return (
        <div className={classes.taskItem} style={classes} onClick={handleCheckTask}>
            <TaskCheckbox className={classes.taskItem__checkbox} checked={isChecked}></TaskCheckbox>
            <p className={classes.taskItem__text} data-iscompleted={task.isCompleted}>{task.text}</p>
        </div>
    );
};

export default TaskItem;