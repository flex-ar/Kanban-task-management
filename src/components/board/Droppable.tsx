import { useDroppable } from '@dnd-kit/core';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  id: number | string;
}
function Droppable({ children, id }: Props) {
  const { isOver, setNodeRef } = useDroppable({ id });
  return (
    <div
      ref={setNodeRef}
      className={`flex h-full flex-col gap-5 ${isOver ? 'bg-green-400' : ''}`}
    >
      {children}
    </div>
  );
}

export default Droppable;
