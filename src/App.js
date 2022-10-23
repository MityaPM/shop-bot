import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';



function App() {
  const { user, onToggleButton, tg } = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
      <button onClick={onToggleButton}></button>
    </div>
  );
}

export default App;
