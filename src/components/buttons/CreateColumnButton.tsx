import { useModal } from '../../hooks/useModal';
import Button from './Button';
import Modal from '../Modal';
import { IconAddTask } from '../icons';
import BoardForm from '../forms/BoardForm';

function CreateColumnButton() {
  const { isOpen, modalRef, outsideModalRef, onOpen, onClose } = useModal();

  return (
    <>
      <Button
        variant="ghost"
        className="mb-1 mt-9 flex w-72 shrink-0 items-center justify-center gap-1 rounded-md text-2xl shadow-md dark:bg-slate-800 dark:hover:fill-sky-400 dark:hover:text-sky-400"
        onClick={onOpen}
      >
        <span>
          <IconAddTask />
        </span>
        New Column
      </Button>
      {isOpen && (
        <Modal
          modalRef={modalRef}
          outsideModalRef={outsideModalRef}
          onClose={onClose}
        >
          <BoardForm
            title="Edit Board"
            textButton="Save Changes"
            boardId={0}
            onSubmit={console.log}
          />
        </Modal>
      )}
    </>
  );
}

export default CreateColumnButton;
