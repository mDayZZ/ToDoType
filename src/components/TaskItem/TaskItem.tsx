import {ITaskItemProps, TaskStatus} from "./TaskItem.interface.ts";
import classes from './TaskItem.module.scss';
import TaskCheckbox from "../UI/TaskCheckbox/TaskCheckbox.tsx";
const TaskItem = ({task}: ITaskItemProps) => {
    const getIsCheckedFromStatus = (status: TaskStatus): boolean => {
        if (status === TaskStatus.Active) {
            return true;
        }

        if (status === TaskStatus.Completed) {
            return true;
        }
        return false;
    }


    const isChecked = getIsCheckedFromStatus(task.status);
    return (
        <div className={classes.taskItem} style={classes}>
            <TaskCheckbox checked={isChecked}></TaskCheckbox>
            <p>{task.text}</p>
        </div>
    );
};

export default TaskItem;