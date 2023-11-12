import { useState } from 'react';
import type { Task } from '../../types';
import MenuButton from '../buttons/MenuButton';
import FormContainer from './FormContainer';
import { IconChevronDown, IconChevronUp } from '../icons';
import { boards } from '../../data.json';

interface Props {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
}
function TaskModal({ task, onEdit, onDelete }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const status = boards[0].columns.map((col) => col.name);
  const subtasksCompleted = task.subtasks.filter(
    ({ isCompleted }) => isCompleted
  ).length;

  return (
    <FormContainer onSubmit={() => {}}>
      <div className="flex items-center justify-between">
        <p>{task.title}</p>
        <MenuButton
          text="Task"
          className="text-base font-normal"
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </div>
      <p className="text-sm font-normal dark:text-slate-400">
        {task.description}
      </p>
      <div className="flex flex-col gap-2 text-sm">
        <p>
          Subtasks ({subtasksCompleted}) of ({task.subtasks.length})
        </p>
        {task.subtasks.map(({ title, isCompleted }) => {
          return (
            <label
              key={title}
              className="flex w-full cursor-pointer items-center gap-4 rounded-md p-4 dark:bg-slate-900 dark:hover:bg-sky-400/50"
            >
              <input
                type="checkbox"
                checked={isCompleted}
                className="dark:bg-slate-900"
                value={title}
                onChange={() => {}}
              />
              {title}
            </label>
          );
        })}
      </div>
      <div className="pb-1">
        <p className="mb-3 text-sm">Current Status</p>
        <div className="relative w-full rounded-md text-sm font-normal outline outline-1 dark:bg-slate-900 dark:outline-slate-600 dark:hover:outline-sky-400 dark:focus:outline-sky-400">
          <select
            className="relative z-20 w-full cursor-pointer appearance-none rounded-md bg-transparent px-4 py-2 outline-none placeholder:italic"
            placeholder="e.g. Take coffee break"
            onClick={() => setIsOpen(!isOpen)}
          >
            {status.map((s) => (
              <option className="dark:bg-slate-900" key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <span className="absolute right-2 z-10 inline-flex h-full items-center justify-center">
            {isOpen ? <IconChevronUp /> : <IconChevronDown />}
          </span>
        </div>
      </div>
    </FormContainer>
  );
}

export default TaskModal;
