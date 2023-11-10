import { useEffect, type ReactNode, type RefObject } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  modalRef: RefObject<HTMLDivElement>;
  outsideModalRef: RefObject<HTMLDivElement>;
  onClose: () => void;
  children: ReactNode;
}
function Modal_({ modalRef, outsideModalRef, onClose, children }: Props) {
  useEffect(() => {
    function handleModalClick(e: MouseEvent) {
      const node = e.target as Node;
      if (!modal?.contains(node)) onClose();
    }
    const modal = modalRef?.current;
    const outsideModal = outsideModalRef?.current;
    outsideModal?.addEventListener('click', handleModalClick);

    return () => {
      outsideModal?.removeEventListener('click', handleModalClick);
    };
  });

  return (
    <div
      ref={outsideModalRef}
      className="fixed left-0 top-0 z-40 flex h-full w-full items-center justify-center dark:bg-slate-900/50"
    >
      <div
        ref={modalRef}
        className="w-3/5 max-w-md rounded-md px-2 py-5 shadow-md dark:bg-slate-800 dark:text-white"
      >
        {children}
      </div>
    </div>
  );
}

const Modal = (props: Props) =>
  createPortal(<Modal_ {...props} />, document.body);

export default Modal;
