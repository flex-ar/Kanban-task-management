import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex h-screen flex-col dark:bg-slate-900 dark:text-white">
      <Header />
      <div className="flex h-screen">
        <Sidebar />
        <div>dashboard</div>
      </div>
    </div>
  );
}

export default App;
