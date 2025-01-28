import {ITaskItem} from "../../components/TaskItem/TaskItem.interfaces.ts";
import {Dispatch, SetStateAction, useMemo, useState} from "react";

export type UseFilterTasksPropsType = ITaskItem[];

export type UseFilterTasksReturnType = [ITaskItem[], filterMode: string, setFilterMode: Dispatch<SetStateAction<string>>]


export const useFilterTasks = (tasks: UseFilterTasksPropsType):UseFilterTasksReturnType  => {
    const [filterMode, setFilterMode] = useState('all');

    const filteredTasks = useMemo(() => {
        return tasks.filter(task => {
            if (filterMode === 'active') {
                if (task.isCompleted) {
                    return
                }
            }
            if (filterMode === 'completed') {
                if (!task.isCompleted) {
                    return
                }
            }
            return task;
        })
    }, [tasks, filterMode]);

    return [filteredTasks, filterMode, setFilterMode]
}