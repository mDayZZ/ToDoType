import {ITaskItem} from "../TaskItem/TaskItem.interfaces.ts";
import {Dispatch, SetStateAction} from "react";

export interface ITaskCardFooterProps {
    tasks: ITaskItem[],
    filterMode: string,
    setFilterMode: Dispatch<SetStateAction<string>>,
    onClearCompletedTasks: () => void,
}
