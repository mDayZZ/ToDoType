import {OnCheckTaskType} from "../TaskCard/TaskCard.interfaces.ts";

export interface ITaskItemProps {
    task: ITaskItem,
    onCheckTask: OnCheckTaskType;
}

export interface ITaskItem {
    id: string,
    cardId: string,
    text: string,
    isCompleted: boolean,
}