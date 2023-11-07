import { useRef, useEffect, useState } from 'react';
import { useThemeContext } from '../ThemeContext';
import { IconAddTask } from './icons/IconAddTaskMobile';
import { IconVerticalEllipsis } from './icons/IconVerticalEllipsis';
import { LogoDark } from './icons/LogoDark';
import { LogoLight } from './icons/LogoLight';
import { LogoMobile } from './icons/LogoMobile';
import Button from './buttons/Button';

function Header() {
  const name = 'Platform Launch';
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLDivElement>(null);
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
    <header className="sticky top-0 z-20 flex items-center justify-between px-4 py-5 dark:bg-slate-800">
      <div className="flex items-center gap-4 ps-3 sm:gap-28">
        <span className="hidden sm:block">
          {theme === 'dark' ? <LogoLight /> : <LogoDark />}
        </span>
        <span className="block sm:hidden">
          <LogoMobile />
        </span>
        <h1 className="text-2xl font-bold">{name}</h1>
      </div>
      <div className="flex gap-4">
        <Button
          className="flex items-center gap-1 rounded-full px-4"
          onClick={() => {}}
        >
          <span>
            <IconAddTask />
          </span>
          <span className="hidden font-bold md:block">Add New Task</span>
        </Button>
        <div>
          <div ref={menuButtonRef}>
            <Button
              variant="ghost"
              className="rounded-full"
              onClick={handleOptionClick}
            >
              <span className="flex h-10 w-10 items-center justify-center dark:fill-slate-400">
                <IconVerticalEllipsis />
              </span>
            </Button>
          </div>
          {isActive && (
            <div
              ref={menuRef}
              className="absolute right-4 mt-2 flex flex-col rounded-md shadow-md dark:bg-slate-900"
            >
              <Button
                variant="ghost"
                className="w-full rounded-t-md px-4 py-3 text-start"
                onClick={handleEditClick}
              >
                Edit Board
              </Button>
              <Button
                variant="ghost-v2"
                className="w-full rounded-b-md px-4 py-3 text-center text-red-400"
                onClick={handleDeleteClick}
              >
                Delete Board
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
