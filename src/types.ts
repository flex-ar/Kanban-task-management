export type State = {
  activeId?: string;
  boardIds: string[];
  boards: Boards;
  columns: Columns;
  tasks: Tasks;
  subtasks: Subtasks;
};

export type Boards = Map<string, Board>;
export type Board = {
  id: string;
  name: string;
  columnIds: string[];
};

export type Columns = Map<string, Column>;
export type Column = {
  id: string;
  name: string;
  taskIds: string[];
};

export type Tasks = Map<string, Task>;
export type Task = {
  id: string;
  title: string;
  description: string;
  status: string;
  subtaskIds: string[];
};

export type Subtasks = Map<string, Subtask>;
export type Subtask = {
  id: string;
  title: string;
  isCompleted: boolean;
};
