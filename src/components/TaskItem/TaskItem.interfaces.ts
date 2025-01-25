import {OnCheckTaskType, OnDeleteTaskType} from "../TaskCard/TaskCard.interfaces.ts";

export interface ITaskItemProps {
    task: ITaskItem,
    onCheckTask: OnCheckTaskType;
    onDeleteTask: OnDeleteTaskType;
}

export interface ITaskItem {
    id: string,
    cardId: string,
    text: string,
    isCompleted: boolean,
}