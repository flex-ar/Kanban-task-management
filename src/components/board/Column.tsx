import type { Column as ColumnType } from '../../types';
import Draggable from './Draggable';
import Droppable from './Droppable';
import TaskCard from './TaskCard';

function Column({ name, tasks }: ColumnType) {
  return (
    <div className="flex w-72 shrink-0 flex-col gap-4 p-1">
      <div className="flex items-center gap-3">
        <div className="h-4 w-4 rounded-full bg-green-400"></div>
        <p className="text-xs uppercase tracking-wider dark:text-slate-400">
          {name} ({tasks.length})
        </p>
      </div>
      <Droppable id={name}>
        {tasks.map((task) => (
          <Draggable key={task.title} id={task.title}>
            <TaskCard {...task} />
          </Draggable>
        ))}
      </Droppable>
    </div>
  );
}

export default Column;
