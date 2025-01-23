import classes from './TaskCard.module.scss';
import TaskForm from "../TaskForm/TaskForm.tsx";
import {useState} from "react";
import TaskList from "../TaskList/TaskList.tsx";
import {ITaskItem} from "../TaskItem/TaskItem.interface.ts";
import {onCheckTaskType} from "./TaskCard.interfaces.ts";

const TaskCard = () => {
    const [tasks, setTasks] = useState<ITaskItem[]>(
        [
            {id: 'dw12-2', cardId: '101', text: 'Тестовое задание', isCompleted: false},
            {id: 'dw12-3', cardId: '101', text: 'Прекрасный код', isCompleted: true},
            {id: 'dw12-4', cardId: '101', text: 'Покрытие тестами', isCompleted: false},
        ]);
    const onCheckTask : onCheckTaskType = (taskId) => {
        const updatedTasks = tasks.map(task => {
            if (task.id !== taskId) {
                return task
            }
            task.isCompleted = !task.isCompleted;
            return task;
        })
        setTasks(updatedTasks);
    }


    return (
        <div className={classes.taskCard}>
            <TaskForm />
            <TaskList tasks={tasks} onCheckTask={onCheckTask} />
        </div>
    );
};

export default TaskCard;