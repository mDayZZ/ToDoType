import classes from './TaskCardFooter.module.scss';
import {ITaskCardFooterProps} from "./TaskCardFooter.interfaces.ts";
import RemainingTasksCounter from "../RemainingTasksCounter/RemainingTasksCounter.tsx";
import TaskModeToggle from "../TaskModeToggle/TaskModeToggle.tsx";
import Button from "../UI/Button/Button.tsx";
const TaskCardFooter = ({ tasks, filterMode, setFilterMode, onClearCompletedTasks}: ITaskCardFooterProps) => {

    return (
        <footer className={classes.taskCardFooter}>
            <RemainingTasksCounter tasks={tasks}/>
            <TaskModeToggle filterMode={filterMode} setFilterMode={setFilterMode}/>
            <Button onClick={onClearCompletedTasks}>Clear completed tasks</Button>
        </footer>
    );
};

export default TaskCardFooter;