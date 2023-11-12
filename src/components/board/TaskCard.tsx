import type { Task } from '../../types';

interface Props {
  task: Task;
  onClick: () => void;
}
function TaskCard({ task, onClick }: Props) {
  const subtasksCompleted = task.subtasks.filter(
    ({ isCompleted }) => isCompleted
  ).length;

  return (
    <div
      onClick={onClick}
      className="rounded-md p-5 shadow-md dark:bg-slate-800 dark:hover:text-sky-400"
    >
      <p>{task.title}</p>
      <span className="text-xs dark:text-slate-400">
        {subtasksCompleted} of {task.subtasks.length} substasks
      </span>
    </div>
  );
}

export default TaskCard;
