import type { Board, Column, State, Subtask, Task } from './types';

type ActiveBoard = { type: 'active_board'; id: string };
type CreateBoard = { type: 'create_board'; board: Board };
type CreateColumn = { type: 'create_column'; column: Column };
type CreateTask = { type: 'create_task'; task: Task };
type CreateSubtask = { type: 'create_subtask'; subtask: Subtask };
type DeleteBoard = { type: 'delete_board'; id: string };
type DeleteColumn = { type: 'delete_column'; id: string };
type DeleteTask = { type: 'delete_task'; id: string };
type DeleteSubtask = { type: 'delete_subtask'; id: string };
export type StateAction =
  | ActiveBoard
  | CreateBoard
  | CreateColumn
  | CreateTask
  | CreateSubtask
  | DeleteBoard
  | DeleteColumn
  | DeleteTask
  | DeleteSubtask;

export function stateReducer(state: State, action: StateAction): State {
  switch (action.type) {
    case 'active_board': {
      return { ...state, activeId: action.id };
    }
    case 'create_board': {
      state.boards.set(action.board.id, action.board);
      return state;
    }
    case 'create_column': {
      state.columns.set(action.column.id, action.column);
      return state;
    }
    case 'create_task': {
      state.tasks.set(action.task.id, action.task);
      return state;
    }
    case 'create_subtask': {
      state.subtasks.set(action.subtask.id, action.subtask);
      return state;
    }
    case 'delete_board': {
      state.boards.delete(action.id);
      return state;
    }
    case 'delete_column': {
      state.columns.delete(action.id);
      return state;
    }
    case 'delete_task': {
      state.tasks.delete(action.id);
      return state;
    }
    case 'delete_subtask': {
      state.subtasks.delete(action.id);
      return state;
    }
    default:
      return state;
  }
}
