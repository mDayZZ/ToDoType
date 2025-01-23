import classes from './TaskCard.module.scss';
import TaskForm from "../TaskForm/TaskForm.tsx";
import {useState} from "react";
import TaskList from "../TaskList/TaskList.tsx";
import {TaskStatus} from "../TaskItem/TaskItem.interface.ts";

const TaskCard = () => {
    const [tasks, setTasks] = useState(
        [
            {id: 'dw12-2', cardId: '101', text: 'Тестовое задание', status: TaskStatus.Active},
            {id: 'dw12-3', cardId: '101', text: 'Прекрасный код', status: TaskStatus.Completed},
            {id: 'dw12-4', cardId: '101', text: 'Покрытие тестами', status: TaskStatus.Active},
        ]);
    return (
        <div className={classes.taskCard}>
            <TaskForm />
            <TaskList tasks={tasks}/>
        </div>
    );
};

export default TaskCard;