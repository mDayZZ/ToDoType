import {onCheckTaskType} from "../TaskCard/TaskCard.interfaces.ts";

export interface ITaskItemProps {
    task: ITaskItem,
    onCheckTask: onCheckTaskType;
}

export interface ITaskItem {
    id: string,
    cardId: string,
    text: string,
    isCompleted: boolean,
}