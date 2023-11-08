import { IconHideSidebar, IconShowSidebar } from '../icons';

interface Props {
  hide: boolean;
  onClick: () => void;
}
function HideSidebarButton({ hide, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-6 left-0 z-30 hidden rounded-r-full fill-slate-400 py-3 pe-6 ps-6 font-bold transition-hide hover:fill-sky-500 dark:text-slate-400 dark:hover:text-sky-400 sm:flex sm:items-center sm:gap-2 ${
        hide
          ? '-translate-x-2/3 dark:bg-sky-500 dark:hover:bg-sky-400'
          : 'dark:hover:bg-white'
      }`}
    >
      <span className={`${hide ? 'opacity-0' : 'opacity-100'}`}>
        <IconHideSidebar />
      </span>
      <p className={`${hide ? 'opacity-0' : 'opacity-100'}`}>Hide Sidebar</p>
      <span className={`fill-white ${!hide ? 'opacity-0' : 'opacity-100'}`}>
        <IconShowSidebar />
      </span>
    </button>
  );
}

export default HideSidebarButton;
