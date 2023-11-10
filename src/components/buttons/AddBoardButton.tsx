import { useRef, useState } from 'react';
import { IconAddTask } from '../icons';
import BoardButton from './BoardButton';
import Modal from '../Modal';
import { boards } from '../../data.json';
import AddBoardForm from '../forms/AddBoardForm';

function AddBoardButton() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const outsideModalRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <BoardButton
        variant="ghost-v2"
        className={`dark:fill-sky-400 dark:text-sky-400 ${
          boards.length > 13 ? 'me-4' : 'me-2'
        }`}
        onClick={() => setIsOpen(true)}
      >
        <div className="flex items-center gap-1">
          <span>
            <IconAddTask />
          </span>
          <span>Create New Board</span>
        </div>
      </BoardButton>
      {isOpen && (
        <Modal
          modalRef={modalRef}
          outsideModalRef={outsideModalRef}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <AddBoardForm />
        </Modal>
      )}
    </>
  );
}

export default AddBoardButton;
