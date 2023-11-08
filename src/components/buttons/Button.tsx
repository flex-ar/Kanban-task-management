import type { ReactNode } from 'react';

interface Props {
  variant?: 'primary' | 'secondary' | 'ghost' | 'ghost-v2';
  className?: string;
  onClick: () => void;
  children: ReactNode;
}
function Button({
  variant = 'primary',
  className = '',
  onClick,
  children,
}: Props) {
  let variantStyle = '';

  if (variant === 'primary')
    variantStyle = 'bg-sky-500 hover:bg-sky-400 text-white fill-white';

  if (variant === 'secondary')
    variantStyle = 'dark:bg-white dark:text-sky-400 dark:fill-sky-400';

  if (variant === 'ghost')
    variantStyle =
      'dark:hover:bg-slate-700 dark:text-slate-400 dark:fill-slate-400';

  if (variant === 'ghost-v2') variantStyle = 'dark:hover:bg-slate-700';

  return (
    <button onClick={onClick} className={`${className} ${variantStyle}`}>
      {children}
    </button>
  );
}

export default Button;
