import { useModal } from '../../hooks/useModal';
import Button from './Button';
import Modal from '../Modal';
import { IconAddTask } from '../icons';
import BoardForm from '../forms/BoardForm';
import { useStateContext } from '../../context/useStateContext';
import { Input } from '../../hooks/useForm';
import { Board, Column } from '../../types';

function CreateColumnButton() {
  const { isOpen, modalRef, outsideModalRef, onOpen, onClose } = useModal();
  const { state, get } = useStateContext();
  const boardActive = state.activeId
    ? get<Board>('boards', state.activeId)
    : null;
  const columns = boardActive?.columnIds.map((id) =>
    get<Column>('columns', id)
  );

  function handleEditBoard(inputs: Input[]) {
    const [name, ...cols] = inputs;
    console.log(name, cols);
    onClose();
  }

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
      {isOpen && boardActive && (
        <Modal
          modalRef={modalRef}
          outsideModalRef={outsideModalRef}
          onClose={onClose}
        >
          <BoardForm
            title="Edit Board"
            textButton="Save Changes"
            board={boardActive}
            columns={columns}
            onSubmit={handleEditBoard}
          />
        </Modal>
      )}
    </>
  );
}

export default CreateColumnButton;
