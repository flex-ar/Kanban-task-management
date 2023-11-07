import { useState } from 'react';
import Sidebar from './Sidebar';
import HideSidebarButton from './buttons/HideSidebarButton';

function MainContainer() {
  const [hide, setHide] = useState(false);

  function onClick() {
    setHide(!hide);
  }

  return (
    <>
      <Sidebar hide={hide} />
      <main
        className={`overflow-hidden transition-padding dark:bg-slate-900 ${
          hide ? 'p-0' : 'ps-72'
        }`}
      >
        dashboard
      </main>
      <HideSidebarButton hide={hide} onClick={onClick} />
    </>
  );
}

export default MainContainer;
