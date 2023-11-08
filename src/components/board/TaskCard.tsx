import type { Task } from '../../types';

function TaskCard({ title, subtasks }: Task) {
  const subtasksCompleted = subtasks.filter(
    ({ isCompleted }) => isCompleted
  ).length;

  return (
    <div
      onClick={() => {}}
      className="rounded-md p-5 shadow-md dark:bg-slate-800"
    >
      <p>{title}</p>
      <span className="text-xs dark:text-slate-400">
        {subtasksCompleted} of {subtasks.length} substasks
      </span>
    </div>
  );
}

export default TaskCard;
