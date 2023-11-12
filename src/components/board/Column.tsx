import { useState } from 'react';
import type { Task, Column as ColumnType } from '../../types';
import Draggable from './Draggable';
import Droppable from './Droppable';
import TaskCard from './TaskCard';
import { useModal } from '../../hooks/useModal';
import Modal from '../Modal';
import TaskModal from '../forms/TaskModal';
import TaskForm from '../forms/TaskForm';

function Column({ name, tasks }: ColumnType) {
  const [formType, setFormType] = useState<'task' | 'edit'>('task');
  const [task, setTask] = useState<Task | null>(null);
  const { isOpen, modalRef, outsideModalRef, onOpen, onClose } = useModal();

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
            <TaskCard
              task={task}
              onClick={() => {
                setTask(task);
                onOpen();
              }}
            />
          </Draggable>
        ))}
      </Droppable>
      {isOpen && task && (
        <Modal
          modalRef={modalRef}
          outsideModalRef={outsideModalRef}
          onClose={() => {
            setFormType('task');
            onClose();
          }}
        >
          {formType === 'task' ? (
            <TaskModal
              task={task}
              onEdit={() => {
                setFormType('edit');
              }}
              onDelete={() => {}}
            />
          ) : (
            <TaskForm
              title="Edit Task"
              textButton="Create Task"
              boardId={0}
              task={task}
            />
          )}
        </Modal>
      )}
    </div>
  );
}

export default Column;
