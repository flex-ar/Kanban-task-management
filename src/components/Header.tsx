import { useThemeContext } from '../ThemeContext';
import { IconAddTask, LogoMobile, LogoLight, LogoDark } from './icons';
import Button from './buttons/Button';
import MenuButton from './buttons/MenuButton';
import { boards } from '../data.json';

function Header() {
  const board = boards[0];
  const { theme } = useThemeContext();

  function onEdit() {
    console.log('Edit Board');
  }

  function onDelete() {
    console.log('Delete Board');
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
        <h1 className="text-2xl font-bold">{board.name}</h1>
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
        <MenuButton text="Board" onEdit={onEdit} onDelete={onDelete} />
      </div>
    </header>
  );
}

export default Header;
