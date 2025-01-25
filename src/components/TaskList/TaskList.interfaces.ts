import {ITaskItem} from "../TaskItem/TaskItem.interfaces.ts";
import {OnCheckTaskType, OnDeleteTaskType} from "../TaskCard/TaskCard.interfaces.ts";

export interface ITaskListProps {
    tasks: ITaskItem[],
    onCheckTask: OnCheckTaskType,
    onDeleteTask: OnDeleteTaskType,
}