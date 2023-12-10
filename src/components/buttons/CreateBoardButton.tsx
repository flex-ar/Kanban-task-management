import { IconAddTask } from '../icons';
import BoardButton from './BoardButton';
import Modal from '../Modal';
import { useModal } from '../../hooks/useModal';
import BoardForm from '../forms/BoardForm';
import type { Input } from '../../hooks/useForm';
import { useStateContext } from '../../context/useStateContext';

function CreateBoardButton() {
  const { isOpen, modalRef, outsideModalRef, onOpen, onClose } = useModal();
  const { state } = useStateContext();

  function handleCreateBoard(inputs: Input[]) {
    const [name, ...cols] = inputs;
    console.log(name, cols);
    onClose();
  }

  return (
    <>
      <BoardButton
        variant="ghost-v2"
        className={`dark:fill-sky-400 dark:text-sky-400 ${
          state.boards.size > 13 ? 'me-4' : 'me-2'
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
            onSubmit={handleCreateBoard}
          />
        </Modal>
      )}
    </>
  );
}

export default CreateBoardButton;
