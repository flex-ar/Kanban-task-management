import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import Column from './Column';
import CreateColumnButton from '../buttons/CreateColumnButton';
import { useStateContext } from '../../context/useStateContext';
import type { Board, Column as ColumnType } from '../../types';

function KanbanBoard() {
  const { state, get } = useStateContext();
  const boardActive = state.activeId
    ? get<Board>('boards', state.activeId)
    : null;
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 10 } })
  );

  return (
    <div className="flex min-h-full gap-6 overflow-auto px-10 py-5 font-bold">
      <DndContext sensors={sensors}>
        {boardActive?.columnIds.map((id) => {
          const column = get<ColumnType>('columns', id);
          return <Column key={column.id} {...column} />;
        })}
      </DndContext>
      <CreateColumnButton />
    </div>
  );
}

export default KanbanBoard;
