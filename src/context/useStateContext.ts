import { useContext } from 'react';
import { StateContext } from './StateContext';
import { Board, Column, Task, Subtask } from '../types';

type Maps = 'boards' | 'columns' | 'tasks' | 'subtasks';

export const useStateContext = () => {
  const { state, dispatch } = useContext(StateContext);

  function get<T extends Board | Column | Task | Subtask>(
    map: Maps,
    id: string
  ) {
    return state[map].get(id)! as T;
  }

  return { state, get, dispatch };
};
