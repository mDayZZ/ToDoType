import {ITaskItem} from "../components/TaskItem/TaskItem.interfaces.ts";
import {pluralize} from "../utils/pluralize/pluralize.ts";
import {useMemo} from "react";

interface IUseRemainingTasksCounter  {
    (tasks: ITaskItem[]): string;
}
export const useRemainingTasksCounter: IUseRemainingTasksCounter = (tasks) => {

    const counterMessage = useMemo( () => {
        const filteredCompletedTasks = tasks.filter(task => !task.isCompleted);
        const remainingTasksAmount = filteredCompletedTasks.length;
        if (remainingTasksAmount <= 0) {
            return 'All tasks done! :)';
        }

        const tasksWordPluralized = pluralize(remainingTasksAmount, ['item', 'items', 'items'], 'en-US');
        return `${remainingTasksAmount} ${tasksWordPluralized} left`;
    }, [tasks]);

    return counterMessage;
}