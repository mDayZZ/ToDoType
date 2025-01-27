import classes from './TaskList.module.scss'
import TaskItem from "../TaskItem/TaskItem.tsx";
import {ITaskListProps} from "./TaskList.interfaces.ts";

const TaskList = ({tasks, onCheckTask, onDeleteTask}: ITaskListProps) => {
    return (
        <ul className={classes.taskList}>
            {tasks.map(task => <li key={task.id}><TaskItem task={task} onCheckTask={onCheckTask} onDeleteTask={onDeleteTask}/></li>)}

            {tasks.length === 0 &&
                <p className={classes.taskList__voidList}>it's empty...</p>
            }
        </ul>
    );
};

export default TaskList;