import Header from './components/Header';
import MainContainer from './components/MainContainer';
import StateContextProvide from './context/StateContext';

function App() {
  return (
    <div className="h-full dark:bg-slate-900 dark:text-white">
      <StateContextProvide>
        <Header />
        <MainContainer />
      </StateContextProvide>
    </div>
  );
}

export default App;
