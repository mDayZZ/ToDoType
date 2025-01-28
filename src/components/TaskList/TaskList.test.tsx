import TaskList from "./TaskList.tsx";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import {vi} from "vitest";
import {ITaskItem} from "../TaskItem/TaskItem.interfaces.ts";

describe("TaskList component", () => {
    const mockedTasks: ITaskItem[] = [
        {id: '123', text: 'Task 1', isCompleted: false},
        {id: '124', text: 'Task 2', isCompleted: true},
        {id: '125', text: 'Task 3', isCompleted: false},
    ]
    test('loads and displays', async () => {
        render(<TaskList tasks={[]} onDeleteTask={vi.fn()} onCheckTask={vi.fn()}/>);
        const taskListElem = screen.getByTestId('tasklist');
        expect(taskListElem).toBeInTheDocument();
    })
    test('empty tasklist shows empty message', () => {
        render(<TaskList tasks={[]} onDeleteTask={vi.fn()} onCheckTask={vi.fn()}/>);
        const emptyMessageElem = screen.getByTestId('tasklist-empty-message');
        const taskItem = screen.queryByTestId('taskitem');
        expect(emptyMessageElem).toBeInTheDocument();
        expect(taskItem).toBe(null);
    })
    test('filled tasklist shows taskItems', () => {
        render(<TaskList tasks={mockedTasks} onDeleteTask={vi.fn()} onCheckTask={vi.fn()}/>);
        const taskItems = screen.getAllByTestId('taskitem');
        taskItems.forEach((_taskItem, i) => {
            const itemText = screen.getByText(mockedTasks[i].text);
            expect(itemText).toBeInTheDocument();
        });
        expect(taskItems.length).toBe(mockedTasks.length);
    })
})

