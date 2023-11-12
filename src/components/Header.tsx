import { useThemeContext } from '../ThemeContext';
import { IconAddTask, LogoMobile, LogoLight, LogoDark } from './icons';
import Button from './buttons/Button';
import MenuButton from './buttons/MenuButton';
import { boards } from '../data.json';
import { useModal } from '../hooks/useModal';
import Modal from './Modal';
import { useState } from 'react';
import BoardForm from './forms/BoardForm';
import TaskForm from './forms/TaskForm';

function Header() {
  const board = boards[0];
  const { theme } = useThemeContext();
  const [formType, setFormType] = useState<'create' | 'edit'>('create');
  const { isOpen, modalRef, outsideModalRef, onOpen, onClose } = useModal();

  function onDelete() {
    console.log('Delete Board');
  }

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between px-4 py-5 dark:bg-slate-800">
      <div className="flex items-center gap-4 ps-3 sm:gap-28">
        <span className="hidden sm:block">
          {theme === 'dark' ? <LogoLight /> : <LogoDark />}
        </span>
        <span className="block sm:hidden">
          <LogoMobile />
        </span>
        <h1 className="text-2xl font-bold">{board.name}</h1>
      </div>
      <div className="flex gap-4">
        <Button
          className="flex items-center gap-1 rounded-full px-4"
          onClick={() => {
            setFormType('create');
            onOpen();
          }}
        >
          <span>
            <IconAddTask />
          </span>
          <span className="hidden font-bold md:block">Add New Task</span>
        </Button>
        <MenuButton
          text="Board"
          onEdit={() => {
            setFormType('edit');
            onOpen();
          }}
          onDelete={onDelete}
        />
      </div>
      {isOpen && (
        <Modal
          modalRef={modalRef}
          outsideModalRef={outsideModalRef}
          onClose={onClose}
        >
          {formType === 'create' ? (
            <TaskForm
              title="Add New Task"
              textButton="Create New Board"
              boardId={0}
            />
          ) : (
            <BoardForm
              title="Edit Board"
              textButton="Save Changes"
              boardId={0}
              onSubmit={console.log}
            />
          )}
        </Modal>
      )}
    </header>
  );
}

export default Header;
