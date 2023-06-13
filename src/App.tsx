import './App.css';
import AddWatchForm from './components/AddWatchForm/AddWatchForm';
import Watches from './components/Watches/Watches';
import { v4 as uuid } from 'uuid';
import WatchProps from './interfaces/watch';
import { useState } from 'react';

function App() {
  const [watches, setWatches] = useState([
    {
      id: uuid(),
      name: 'Moscow',
      timezone: 4,
    },
    {
      id: uuid(),
      name: 'London',
      timezone: 1,
    },
  ]);

  const addWatch = (newWatch: Omit<WatchProps, 'id'>) => {
    const watch = {
      ...newWatch,
      id: uuid(),
    }
    console.log('add watch run');
    console.log(watches);
    setWatches([...watches, watch]);
  }

  const deleteWatch = (id: string) => {
    setWatches(watches.filter((watch) => watch.id !== id));
  } 

  return (
    <div className='container'>
      <h2>This is app container</h2>
      <AddWatchForm addWatch={addWatch} />
      <Watches watches={watches} />
    </div>
  )
}

export default App;
