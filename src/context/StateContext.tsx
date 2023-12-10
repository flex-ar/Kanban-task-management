import {
  type ReactNode,
  type Dispatch,
  createContext,
  useReducer,
} from 'react';
import DATA from '../data.json';
import { State } from '../types';
import { StateAction, stateReducer } from '../stateReducer';

const data: State = {
  activeId: DATA.activeId,
  boardIds: DATA.boardIds,
  boards: new Map(Object.entries(DATA.boards)),
  columns: new Map(Object.entries(DATA.columns)),
  tasks: new Map(Object.entries(DATA.tasks)),
  subtasks: new Map(Object.entries(DATA.subtasks)),
};

type StateContextType = {
  state: State;
  dispatch: Dispatch<StateAction>;
};
export const StateContext = createContext<StateContextType>(
  {} as StateContextType
);

function StateContextProvide({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(stateReducer, data);
  return (
    <StateContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export default StateContextProvide;
