import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { boards } from '../../data.json';
import Column from './Column';
import CreateColumnButton from '../buttons/CreateColumnButton';

function KanbanBoard() {
  const board = boards[0];
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 10 } })
  );

  return (
    <div className="flex min-h-full gap-6 overflow-auto px-10 py-5 font-bold">
      <DndContext sensors={sensors}>
        {board.columns.map((column) => (
          <Column key={column.name} {...column} />
        ))}
      </DndContext>
      <CreateColumnButton />
    </div>
  );
}

export default KanbanBoard;
