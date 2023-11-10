import { IconDarkTheme, IconLightTheme } from './icons';
import { useThemeContext } from '../ThemeContext';
import BoardButton from './buttons/BoardButton';
import { boards } from '../data.json';
import AddBoardButton from './buttons/AddBoardButton';

interface Props {
  hide: boolean;
}
function Sidebar({ hide }: Props) {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <nav
      className={`fixed top-20 z-10 hidden h-[calc(100%-5rem)] w-72 pe-2 font-bold shadow-md transition-transform dark:bg-slate-800 sm:flex sm:flex-col sm:justify-between ${
        hide ? '-translate-x-full' : ''
      }`}
    >
      <div className="flex flex-col overflow-auto">
        <p className="py-7 ps-6 text-xs tracking-widest dark:text-slate-400">
          ALL BOARDS ({boards.length})
        </p>
        <div className="flex flex-col overflow-auto pe-2">
          {boards.map((board) => (
            <BoardButton
              key={board.name}
              active={board.isActive}
              onClick={() => {}}
            >
              {board.name}
            </BoardButton>
          ))}
        </div>
        <AddBoardButton />
      </div>
      <div
        className={`mb-20 ms-5 mt-5 flex items-center justify-center gap-6 rounded-md px-5 py-3 dark:bg-slate-900 ${
          boards.length > 13 ? 'me-4' : 'me-2'
        }`}
      >
        <IconLightTheme />
        <label className="relative w-10 cursor-pointer rounded-full bg-sky-500 p-1">
          <input type="checkbox" onChange={toggleTheme} className="hidden" />
          <div
            className={`h-3.5 w-3.5 rounded-full bg-white transition-transform ${
              theme === 'dark' ? 'translate-x-[18px]' : ''
            }`}
          />
        </label>
        <IconDarkTheme />
      </div>
    </nav>
  );
}

export default Sidebar;
