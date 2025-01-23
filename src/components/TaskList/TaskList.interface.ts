import {ITaskItem} from "../TaskItem/TaskItem.interface.ts";

export interface ITaskListProps {
    tasks: ITaskItem[],
    onCheckTask: (taskId: string) => void,
}