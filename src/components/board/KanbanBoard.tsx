import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { boards } from '../../data.json';
import Button from '../buttons/Button';
import Column from './Column';
import { IconAddTask } from '../icons';

function Board() {
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
      <Button
        variant="ghost"
        className="mb-1 mt-9 flex w-72 shrink-0 items-center justify-center gap-1 rounded-md text-2xl shadow-md dark:bg-slate-800 dark:hover:fill-sky-400 dark:hover:text-sky-400"
        onClick={() => {}}
      >
        <span>
          <IconAddTask />
        </span>
        New Column
      </Button>
    </div>
  );
}

const KanbanBoard = Board;

export default KanbanBoard;
