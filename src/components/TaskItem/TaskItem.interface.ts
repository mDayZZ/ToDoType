export enum TaskStatus {
    Active = 'active',
    Completed = 'completed',
}

export interface ITaskItemProps {
    task: ITaskItem,

}

export interface ITaskItem {
    id: string,
    cardId: string,
    text: string,
    status: TaskStatus,
}