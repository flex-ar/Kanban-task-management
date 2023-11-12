import { IconAddTask } from '../icons';
import BoardButton from './BoardButton';
import Modal from '../Modal';
import { boards } from '../../data.json';
import { useModal } from '../../hooks/useModal';
import BoardForm from '../forms/BoardForm';

function CreateBoardButton() {
  const { isOpen, modalRef, outsideModalRef, onOpen, onClose } = useModal();

  return (
    <>
      <BoardButton
        variant="ghost-v2"
        className={`dark:fill-sky-400 dark:text-sky-400 ${
          boards.length > 13 ? 'me-4' : 'me-2'
        }`}
        onClick={onOpen}
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
          onClose={onClose}
        >
          <BoardForm
            title="Add New Board"
            textButton="Create New Board"
            onSubmit={console.log}
          />
        </Modal>
      )}
    </>
  );
}

export default CreateBoardButton;
