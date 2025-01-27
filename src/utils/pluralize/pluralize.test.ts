import {pluralize} from "./pluralize";


describe("words pluralize module", () => {
    test("pluralize 'задача' for ru-RU locale", () => {
        expect(pluralize(1, ['задача', 'задачи', 'задач'], 'ru-RU'))
            .toBe('задача');
        expect(pluralize(2, ['задача', 'задачи', 'задач'], 'ru-RU'))
            .toBe('задачи');
        expect(pluralize(3, ['задача', 'задачи', 'задач'], 'ru-RU'))
            .toBe('задачи');
        expect(pluralize(5, ['задача', 'задачи', 'задач'], 'ru-RU'))
            .toBe('задач');
        expect(pluralize(11, ['задача', 'задачи', 'задач'], 'ru-RU'))
            .toBe('задач');
        expect(pluralize(21, ['задача', 'задачи', 'задач'], 'ru-RU'))
            .toBe('задача');
    });
    test("pluralize 'task' for en-US locale", () => {
        expect(pluralize(1, ['task', 'tasks', 'tasks'], 'en-US'))
            .toBe('task');
        expect(pluralize(2, ['task', 'tasks', 'tasks'], 'en-US'))
            .toBe('tasks');
        expect(pluralize(3, ['task', 'tasks', 'tasks'], 'en-US'))
            .toBe('tasks');
        expect(pluralize(5, ['task', 'tasks', 'tasks'], 'en-US'))
            .toBe('tasks');
        expect(pluralize(11, ['task', 'tasks', 'tasks'], 'en-US'))
            .toBe('tasks');
        expect(pluralize(21, ['task', 'tasks', 'tasks'], 'en-US'))
            .toBe('tasks');
    })
})
