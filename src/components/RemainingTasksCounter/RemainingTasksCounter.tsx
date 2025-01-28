import {ITaskItem} from "../TaskItem/TaskItem.interfaces.ts";
import {useRemainingTasksCounter} from "../../hooks/useRemainingTasksCounter/useRemainingTasksCounter.ts";

interface IRemainingTasksCounterProps {
    tasks: ITaskItem[]
}

const RemainingTasksCounter = ({tasks}:IRemainingTasksCounterProps) => {
    const counterMessage = useRemainingTasksCounter(tasks);
    return (
        <div>
            <p>{counterMessage}</p>
        </div>
    );
};

export default RemainingTasksCounter;