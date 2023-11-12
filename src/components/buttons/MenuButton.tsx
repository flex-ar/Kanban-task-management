import { useEffect } from 'react';
import { IconVerticalEllipsis } from '../icons';
import Button from './Button';
import { useModal } from '../../hooks/useModal';

interface Props {
  text: string;
  className?: string;
  onEdit: () => void;
  onDelete: () => void;
}
function MenuButton({ text, className = 'right-4', onEdit, onDelete }: Props) {
  const { isOpen, modalRef: menuButtonRef, onClose, onToggle } = useModal();

  useEffect(() => {
    function handleMenuClick(e: MouseEvent) {
      const node = e.target as Node;
      if (!menuButtonRef.current?.contains(node)) onClose();
    }

    if (isOpen) window.addEventListener('click', handleMenuClick);

    return () => {
      if (isOpen) window.removeEventListener('click', handleMenuClick);
    };
  }, [isOpen, menuButtonRef, onClose]);

  function handleEditClick() {
    onEdit();
    onClose();
  }

  function handleDeleteClick() {
    onDelete();
    onClose();
  }

  return (
    <div>
      <div ref={menuButtonRef}>
        <Button variant="ghost" className="rounded-full" onClick={onToggle}>
          <span className="flex h-10 w-10 items-center justify-center">
            <IconVerticalEllipsis />
          </span>
        </Button>
      </div>
      {isOpen && (
        <div
          className={`absolute mt-2 flex flex-col rounded-md shadow-md dark:bg-slate-900 ${className}`}
        >
          <Button
            variant="ghost"
            className="w-full rounded-t-md px-4 py-3 text-start"
            onClick={handleEditClick}
          >
            Edit {text}
          </Button>
          <Button
            variant="ghost-v2"
            className="w-full rounded-b-md px-4 py-3 text-center text-red-400"
            onClick={handleDeleteClick}
          >
            Delete {text}
          </Button>
        </div>
      )}
    </div>
  );
}

export default MenuButton;
