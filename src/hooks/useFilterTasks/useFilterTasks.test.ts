import {act, renderHook, RenderHookResult} from "@testing-library/react";
import {useFilterTasks, UseFilterTasksReturnType} from "./useFilterTasks.ts";
import {ITaskItem} from "../../components/TaskItem/TaskItem.interfaces.ts";

describe('useFilterTasks hook', () => {
    let mockedTasks: ITaskItem[];
    let result: RenderHookResult<UseFilterTasksReturnType, ReturnType<typeof useFilterTasks>>["result"];
    let setFilterMode: (mode: "all" | "active" | "completed") => void;


    beforeEach(() => {
        mockedTasks = [
            {id: '123', text: 'Task 1', isCompleted: false},
            {id: '124', text: 'Task 2', isCompleted: false},
            {id: '125', text: 'Task 3', isCompleted: false},
            {id: '126', text: 'Task 1', isCompleted: true},
            {id: '127', text: 'Task 2', isCompleted: true},
        ];
        const hook = renderHook(useFilterTasks, {initialProps: mockedTasks})
        result = hook.result;
        setFilterMode = result.current[2];
    });


    test('Should return all tasks', () => {
        setFilterMode('all');
        expect(result.current[0]).toEqual(mockedTasks);
    });

    test('Should return 3 tasks non completed tasks', () => {
        const { result } = renderHook(useFilterTasks, {initialProps: mockedTasks})
        const setFilterMode = result.current[2];
        act(() => {
            setFilterMode('active');
        })
        expect(result.current[0].length).toBe(3);
    });
    test('Should return 2 tasks completed tasks', () => {
        const { result } = renderHook(useFilterTasks, {initialProps: mockedTasks})
        const setFilterMode = result.current[2];
        act(() => {
            setFilterMode('completed');
        })
        expect(result.current[0].length).toBe(2);
    })
    test('Should return empty array for completed tasks', () => {
        mockedTasks = [
            {id: '123', text: 'Task 1', isCompleted: false},
            {id: '124', text: 'Task 2', isCompleted: false},
            {id: '125', text: 'Task 3', isCompleted: false},
            {id: '126', text: 'Task 1', isCompleted: false},
            {id: '127', text: 'Task 2', isCompleted: false},
        ];

        const { result } = renderHook(useFilterTasks, {initialProps: mockedTasks})
        const setFilterMode = result.current[2];
        act(() => {
            setFilterMode('completed');
        })
        expect(result.current[0].length).toBe(0);
    });
    test('Should return empty array for completed tasks', () => {
        mockedTasks = [
            {id: '123', text: 'Task 1', isCompleted: true},
            {id: '124', text: 'Task 2', isCompleted: true},
            {id: '125', text: 'Task 3', isCompleted: true},
            {id: '126', text: 'Task 1', isCompleted: true},
            {id: '127', text: 'Task 2', isCompleted: true},
        ];

        const { result } = renderHook(useFilterTasks, {initialProps: mockedTasks})
        const setFilterMode = result.current[2];
        act(() => {
            setFilterMode('active');
        })
        expect(result.current[0].length).toBe(0);
    })
})