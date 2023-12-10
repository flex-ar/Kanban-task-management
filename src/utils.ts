import type { Board, Column, Subtask, Task } from './types';

export const randomId = (tag = '') =>
  tag + Math.trunc(Math.random() * 100_000).toString();

export const createBoard = (name = '', columnIds: string[] = []): Board => ({
  id: randomId('board_1'),
  name,
  columnIds,
});

export const createColumn = (name = '', taskIds: string[] = []): Column => ({
  id: randomId('col_1'),
  name,
  taskIds,
});

export const createTask = (
  title = '',
  description = '',
  status = '',
  subtaskIds: string[] = []
): Task => ({
  id: randomId('task_'),
  title,
  description,
  status,
  subtaskIds,
});

export const createSubtask = (title = ''): Subtask => ({
  id: randomId('sub_'),
  isCompleted: false,
  title,
});
