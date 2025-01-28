import {ITaskItem} from "../../components/TaskItem/TaskItem.interfaces.ts";
import {renderHook} from "@testing-library/react";
import {useRemainingTasksCounter} from "./useRemainingTasksCounter.ts";

describe("useRemainingTasksCounter hook", () => {
    const emptyMessage = 'All tasks done! :)';

    test('should render received tasks count equals completed tasks: 0', () => {
        const mockedTasks: ITaskItem[] = [
            {id: '123', text: 'Task 1', isCompleted: false},
            {id: '124', text: 'Task 2', isCompleted: false},
            {id: '125', text: 'Task 3', isCompleted: false},
        ]

        const { result } = renderHook(useRemainingTasksCounter, {
            initialProps:
                mockedTasks,
        });
        expect(result.current).toMatch(/\b3\b/);
    });

    test('should render received tasks: 2', () => {
        const mockedTasks: ITaskItem[] = [
            {id: '123', text: 'Task 1', isCompleted: false},
            {id: '124', text: 'Task 2', isCompleted: true},
            {id: '125', text: 'Task 3', isCompleted: false},
        ]
        const { result } = renderHook(useRemainingTasksCounter, {
            initialProps:
            mockedTasks,
        });

        expect(result.current).toMatch(/\b2\b/);
    });

    test('should render received tasks: 1', () => {
        const mockedTasks: ITaskItem[] = [
            {id: '123', text: 'Task 1', isCompleted: false},
            {id: '124', text: 'Task 2', isCompleted: true},
            {id: '125', text: 'Task 3', isCompleted: true},
        ]
        const { result } = renderHook(useRemainingTasksCounter, {
            initialProps:
            mockedTasks,
        });

        expect(result.current).toMatch(/\b1\b/);
    })

    test('should render received tasks: 1', () => {
        const mockedTasks: ITaskItem[] = [
            {id: '123', text: 'Task 1', isCompleted: true},
            {id: '124', text: 'Task 2', isCompleted: true},
            {id: '125', text: 'Task 3', isCompleted: true},
        ]
        const { result } = renderHook(useRemainingTasksCounter, {
            initialProps:
            mockedTasks,
        });

        expect(result.current).toBe(emptyMessage);
    })

})