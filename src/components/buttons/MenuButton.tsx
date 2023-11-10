import { useEffect, useRef, useState } from 'react';
import { IconVerticalEllipsis } from '../icons';
import Button from './Button';

interface Props {
  text: string;
  className?: string;
  onEdit: () => void;
  onDelete: () => void;
}
function MenuButton({ text, className = 'right-4', onEdit, onDelete }: Props) {
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    function handleMenuClick(e: MouseEvent) {
      const node = e.target as Node;
      if (
        !menuButtonRef.current?.contains(node) &&
        !menuRef.current?.contains(node)
      ) {
        setIsActive(false);
      }
    }

    if (isActive) window.addEventListener('click', handleMenuClick);

    return () => {
      if (isActive) window.removeEventListener('click', handleMenuClick);
    };
  }, [isActive]);

  function handleOptionClick() {
    setIsActive(!isActive);
  }

  function handleEditClick() {
    setIsActive(!isActive);
    onEdit();
  }

  function handleDeleteClick() {
    setIsActive(!isActive);
    onDelete();
  }

  return (
    <div>
      <div ref={menuButtonRef}>
        <Button
          variant="ghost"
          className="rounded-full"
          onClick={handleOptionClick}
        >
          <span className="flex h-10 w-10 items-center justify-center">
            <IconVerticalEllipsis />
          </span>
        </Button>
      </div>
      {isActive && (
        <div
          ref={menuRef}
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
