import { useState } from 'react';
import type { Task } from '../../types';
import { randomId } from '../../utils';
import FormContainer from './FormContainer';
import { useForm } from '../../hooks/useForm';
import InputText from './InputText';
import CrossButton from '../buttons/CrossButton';
import Button from '../buttons/Button';
import { IconAddTask, IconChevronDown, IconChevronUp } from '../icons';
import { boards } from '../../data.json';

interface Props {
  title: string;
  textButton: string;
  boardId: number;
  task?: Task;
}
function TaskForm({ title, textButton, boardId, task }: Props) {
  const statusList = boards[boardId].columns.map((col) => col.name);

  const subtasksValues = task?.subtasks.map(({ title }) => ({
    id: randomId('col'),
    value: title,
  })) ?? [
    { id: randomId('sub'), value: '' },
    { id: randomId('sub'), value: '' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const { inputs, onChange, addInput, deleteInput } = useForm([
    { id: 'title', value: task?.title ?? '' },
    { id: 'description', value: task?.description ?? '' },
    { id: 'status', value: task?.status ?? '' },
    ...subtasksValues,
  ]);

  const subInputs = inputs.slice(3);

  return (
    <FormContainer onSubmit={() => console.log(inputs)}>
      <p>{title}</p>
      <div>
        <p className="mb-3 text-sm">Title</p>
        <InputText
          name={inputs[0].id}
          value={inputs[0].value}
          placeholder="e.g. Take coffee break"
          onChange={onChange}
        />
      </div>
      <div>
        <p className="mb-3 text-sm">Description</p>
        <InputText
          textarea
          name={inputs[1].id}
          value={inputs[1].value}
          placeholder="e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little."
          onChange={onChange}
        />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-sm dark:text-slate-400">Subtasks</p>
        {subInputs.map(({ id, value }) => (
          <div key={id} className="flex gap-2">
            <InputText
              name={id}
              value={value}
              placeholder="e.g. Todo..."
              onChange={onChange}
            />
            <CrossButton
              onClick={() => {
                if (subInputs.length > 1) deleteInput(id);
              }}
            />
          </div>
        ))}
        <Button
          variant="secondary"
          className="flex items-center justify-center gap-1 rounded-full py-2 text-sm"
          onClick={() => addInput({ id: randomId('sub'), value: '' })}
        >
          <span>
            <IconAddTask />
          </span>
          Add New Subtask
        </Button>
      </div>
      <div>
        <p className="mb-3 text-sm dark:text-slate-400">Status</p>
        <div className="relative w-full rounded-md text-sm font-normal outline outline-1 dark:bg-slate-900 dark:outline-slate-600 dark:hover:outline-sky-400 dark:focus:outline-sky-400">
          <select
            name={inputs[2].id}
            value={inputs[2].value}
            className="relative z-20 w-full cursor-pointer appearance-none rounded-md bg-transparent px-4 py-2 outline-none placeholder:italic"
            placeholder="e.g. Take coffee break"
            onClick={() => setIsOpen(!isOpen)}
            onChange={onChange}
          >
            {statusList.map((status) => (
              <option className="dark:bg-slate-900" key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          <span className="absolute right-2 z-10 inline-flex h-full items-center justify-center">
            {isOpen ? <IconChevronUp /> : <IconChevronDown />}
          </span>
        </div>
      </div>
      <Button type="submit" className="rounded-full py-2 text-sm">
        {textButton}
      </Button>
    </FormContainer>
  );
}

export default TaskForm;
