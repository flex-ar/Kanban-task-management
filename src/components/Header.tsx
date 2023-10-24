import { useRef, useEffect, useState } from 'react';
import { useThemeContext } from '../ThemeContext';
import { IconAddTask } from '../assets/IconAddTaskMobile';
import { IconVerticalEllipsis } from '../assets/IconVerticalEllipsis';
import { LogoDark } from '../assets/LogoDark';
import { LogoLight } from '../assets/LogoLight';

function Header() {
  const name = 'Platform Launch';
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [isActive, setIsActive] = useState(false);
  const { theme } = useThemeContext();

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
  }

  function handleDeleteClick() {
    setIsActive(!isActive);
  }

  return (
    <header className="flex items-center justify-between px-4 py-5 dark:bg-slate-800">
      <div className="flex items-start gap-24 ps-3">
        <span>{theme === 'dark' ? <LogoLight /> : <LogoDark />}</span>
        <h1 className="text-2xl font-bold">{name}</h1>
      </div>
      <div className="flex gap-4">
        <button className="flex items-center gap-1 rounded-full px-4 dark:bg-sky-500 dark:hover:bg-sky-400">
          <span>
            <IconAddTask />
          </span>
          <span className="hidden font-bold sm:block">Add New Task</span>
        </button>
        <div>
          <button
            ref={menuButtonRef}
            className="rounded-full dark:hover:bg-slate-600"
            onClick={handleOptionClick}
          >
            <span className="flex h-10 w-10 items-center justify-center">
              <IconVerticalEllipsis />
            </span>
          </button>
          {isActive && (
            <div
              ref={menuRef}
              className="absolute right-4 mt-2 flex flex-col rounded-md shadow-md dark:bg-slate-900"
            >
              <button
                onClick={handleEditClick}
                className="w-full rounded-t-md px-4 py-3 text-start dark:hover:bg-slate-600"
              >
                Edit Board
              </button>
              <button
                onClick={handleDeleteClick}
                className="w-full rounded-b-md px-4 py-3 text-center text-red-400 dark:hover:bg-slate-600"
              >
                Delete Board
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
