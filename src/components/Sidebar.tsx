import { IconAddTask } from '../assets/IconAddTaskMobile';
import { IconBoard } from '../assets/IconBoard';
import { IconDarkTheme } from '../assets/IconDarkTheme';
import { IconHideSidebar } from '../assets/IconHideSidebar';
import { IconLightTheme } from '../assets/IconLightTheme';

function Sidebar() {
  return (
    <div className="flex flex-col justify-between pe-6 font-bold dark:bg-slate-800">
      <div className="flex flex-col">
        <p className="py-7 ps-6 text-xs tracking-widest dark:text-slate-400">
          ALL BOARDS (3)
        </p>
        <button className="flex items-center gap-4 rounded-r-full fill-white py-3  ps-6 dark:bg-sky-500 dark:hover:bg-sky-400">
          <span>
            <IconBoard />
          </span>
          Platform Launch
        </button>
        <button className="flex items-center gap-4 rounded-r-full fill-slate-400 py-3  ps-6 dark:text-slate-400 dark:hover:bg-slate-700">
          <span>
            <IconBoard />
          </span>
          Marketing Plan
        </button>
        <button className="flex items-center gap-4 rounded-r-full fill-slate-400 py-3 ps-6 dark:text-slate-400 dark:hover:bg-slate-700">
          <span>
            <IconBoard />
          </span>
          Roadmap
        </button>
        <button className="flex items-center gap-4 rounded-r-full fill-sky-400 py-3 pe-10 ps-6 dark:text-sky-400 dark:hover:bg-slate-600">
          <span>
            <IconBoard />
          </span>
          <div className="flex items-center gap-1">
            <span>
              <IconAddTask />
            </span>
            <span>Create New Board</span>
          </div>
        </button>
      </div>
      <div className="mb-20 ms-5 flex items-center justify-center gap-6 rounded-md px-5 py-3 dark:bg-slate-900">
        <IconLightTheme />
        <label className="flex w-10 cursor-pointer justify-end rounded-full bg-sky-400 p-1">
          <input
            type="checkbox"
            onChange={() => console.log('THEME')}
            className="hidden"
          />
          <div className="h-3.5 w-3.5 rounded-full bg-white" />
        </label>
        <IconDarkTheme />
      </div>

      <button className="absolute bottom-6 flex items-center gap-4 rounded-r-full fill-slate-400 py-3 pe-14 ps-6 hover:fill-sky-400 dark:text-slate-400 dark:hover:bg-white dark:hover:text-sky-400">
        <span>
          <IconHideSidebar />
        </span>
        Hide Sidebar
      </button>
    </div>
  );
}

export default Sidebar;
