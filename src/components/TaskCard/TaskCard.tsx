import classes from './TaskCard.module.scss';
import TaskForm from "../TaskForm/TaskForm.tsx";
import {useState} from "react";
import TaskList from "../TaskList/TaskList.tsx";
import {ITaskItem} from "../TaskItem/TaskItem.interfaces.ts";
import {OnAddTaskType, OnCheckTaskType} from "./TaskCard.interfaces.ts";
import TaskCardFooter from "../TaskCardFooter/TaskCardFooter.tsx";
import { v4 as uuidv4 } from 'uuid';

const TaskCard = () => {
    const taskCardId = '101';
    const [tasks, setTasks] = useState<ITaskItem[]>(
        [
            {id: 'dw12-2', cardId: '101', text: 'Тестовое задание', isCompleted: false},
            {id: 'dw12-3', cardId: '101', text: 'Прекрасный код', isCompleted: true},
            {id: 'dw12-4', cardId: '101', text: 'Покрытие тестами', isCompleted: false},
        ]);

    const onCheckTask : OnCheckTaskType = (taskId) => {
        const updatedTasks = tasks.map(task => {
            if (task.id !== taskId) {
                return task
            }
            task.isCompleted = !task.isCompleted;
            return task;
        })
        setTasks(updatedTasks);
    }

    const onAddTask: OnAddTaskType = (taskText) => {
        const newTask: ITaskItem = {
            id: uuidv4(),
            cardId: taskCardId,
            text: taskText,
            isCompleted: false,
        };
        setTasks(prevState => [newTask, ...prevState]);
    }


    return (
        <div className={classes.taskCard}>
            <TaskForm onAddTask={onAddTask}/>
            <TaskList tasks={tasks} onCheckTask={onCheckTask} />
            <TaskCardFooter/>
        </div>
    );
};

export default TaskCard;