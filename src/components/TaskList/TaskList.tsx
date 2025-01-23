import classes from './TaskList.module.scss'
import TaskItem from "../TaskItem/TaskItem.tsx";
import {ITaskListProps} from "./TaskList.interface.ts";

const TaskList = ({tasks, onCheckTask}: ITaskListProps) => {
    return (
        <ul className={classes.taskList}>
            {tasks.map(task => <li><TaskItem task={task} onCheckTask={onCheckTask}/></li>)}
        </ul>
    );
};

export default TaskList;