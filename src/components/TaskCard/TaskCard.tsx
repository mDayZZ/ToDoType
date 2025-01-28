import classes from './TaskCard.module.scss';
import TaskForm from "../TaskForm/TaskForm.tsx";
import {useState} from "react";
import TaskList from "../TaskList/TaskList.tsx";
import {ITaskItem} from "../TaskItem/TaskItem.interfaces.ts";
import {OnAddTaskType, OnCheckTaskType, OnDeleteTaskType} from "./TaskCard.interfaces.ts";
import TaskCardFooter from "../TaskCardFooter/TaskCardFooter.tsx";
import { v4 as uuidv4 } from 'uuid';
import {useFilterTasks} from "../../hooks/useFilterTasks/useFilterTasks.ts";

const TaskCard = () => {
    const [tasks, setTasks] = useState<ITaskItem[]>(
        [
            {id: 'dw12-2', text: 'Тестовое задание', isCompleted: false},
            {id: 'dw12-3', text: 'Прекрасный код', isCompleted: true},
            {id: 'dw12-4', text: 'Покрытие тестами', isCompleted: false},
        ]);

    const [filteredTasks, filterMode, setFilterMode] = useFilterTasks(tasks);



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
            text: taskText,
            isCompleted: false,
        };
        setTasks(prevState => [newTask, ...prevState]);
    }

    const onClearCompletedTasks = () => {
        const newTasks: ITaskItem[] = tasks.filter(task => !task.isCompleted);
        setTasks(newTasks);
    }

    const onDeleteTask: OnDeleteTaskType = (taskId) => {
        const newTasks: ITaskItem[] = tasks.filter(task => task.id !== taskId);
        setTasks(newTasks);
    }


    return (
        <div className={classes.taskCard}>
            <TaskForm onAddTask={onAddTask}/>
            <TaskList tasks={filteredTasks} onCheckTask={onCheckTask} onDeleteTask={onDeleteTask}/>
            <TaskCardFooter tasks={tasks} filterMode={filterMode} setFilterMode={setFilterMode} onClearCompletedTasks={onClearCompletedTasks}/>
        </div>
    );
};

export default TaskCard;