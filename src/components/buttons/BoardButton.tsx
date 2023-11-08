import type { ReactNode } from 'react';
import { IconBoard } from '../icons';
import Button from './Button';

interface Props {
  children: ReactNode;
  active?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost' | 'ghost-v2';
  className?: string;
}
function BoardButton({
  active = false,
  variant = 'ghost',
  className = '',
  children,
}: Props) {
  return (
    <Button
      variant={active ? 'primary' : variant}
      className={`flex items-center gap-4 rounded-r-full py-3 ps-6 ${className}`}
      onClick={() => {}}
    >
      <span>
        <IconBoard />
      </span>
      {children}
    </Button>
  );
}

export default BoardButton;
