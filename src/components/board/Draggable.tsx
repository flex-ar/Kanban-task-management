import { useDraggable } from '@dnd-kit/core';
import type { ReactNode, CSSProperties } from 'react';

interface Props {
  children: ReactNode;
  id: number | string;
}
function Draggable({ children, id }: Props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style: CSSProperties | undefined = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
}

export default Draggable;
