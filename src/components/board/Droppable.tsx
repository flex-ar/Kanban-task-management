import { useDroppable } from '@dnd-kit/core';
import type { ReactNode, CSSProperties } from 'react';

interface Props {
  children: ReactNode;
  id: number | string;
}
function Droppable({ children, id }: Props) {
  const { isOver, setNodeRef } = useDroppable({ id });
  const style: CSSProperties = {
    backgroundColor: isOver ? 'green' : undefined,
  };
  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}

export default Droppable;
