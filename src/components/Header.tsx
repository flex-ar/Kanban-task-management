import { useThemeContext } from '../context/useThemeContext';
import { IconAddTask, LogoMobile, LogoLight, LogoDark } from './icons';
import Button from './buttons/Button';
import MenuButton from './buttons/MenuButton';
import { useModal } from '../hooks/useModal';
import Modal from './Modal';
import { useState } from 'react';
import BoardForm from './forms/BoardForm';
import TaskForm from './forms/TaskForm';
import { useStateContext } from '../context/useStateContext';

function Header() {
  const { state } = useStateContext();
  const boardActive = state.activeId
    ? state.boards.get(state.activeId)
    : undefined;
  const columns = boardActive?.columnIds.map((id) => state.columns.get(id)!);
  const { theme } = useThemeContext();
  const [formType, setFormType] = useState<'create' | 'edit'>('create');
  const { isOpen, modalRef, outsideModalRef, onOpen, onClose } = useModal();

  function onDelete() {
    console.log('Delete Board');
  }

  function handleEditBoard() {
    onClose();
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
        <h1 className="text-2xl font-bold">{boardActive?.name}</h1>
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
            <TaskForm title="Add New Task" textButton="Create New Board" />
          ) : (
            <BoardForm
              title="Edit Board"
              textButton="Save Changes"
              onSubmit={handleEditBoard}
              board={boardActive}
              columns={columns}
            />
          )}
        </Modal>
      )}
    </header>
  );
}

export default Header;
