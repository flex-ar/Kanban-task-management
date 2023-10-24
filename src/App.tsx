import Header from './components/Header';

function App() {
  return (
    <div className="h-screen dark:bg-slate-900 dark:text-white">
      <Header />
      <div>sidebar</div>
      <div>content</div>
    </div>
  );
}

export default App;
