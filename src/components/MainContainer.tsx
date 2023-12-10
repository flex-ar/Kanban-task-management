import { useState } from 'react';
import Sidebar from './Sidebar';
import HideSidebarButton from './buttons/HideSidebarButton';
import KanbanBoard from './board/KanbanBoard';

function MainContainer() {
  const [hide, setHide] = useState(false);

  function onClick() {
    setHide(!hide);
  }

  return (
    <>
      <Sidebar hide={hide} />
      <main
        className={`h-[calc(100%-5rem)] overflow-auto transition-padding dark:bg-slate-900 ${
          hide ? 'p-0' : 'sm:ps-72'
        }`}
      >
        <KanbanBoard />
      </main>
      <HideSidebarButton hide={hide} onClick={onClick} />
    </>
  );
}

export default MainContainer;
