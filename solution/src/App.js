import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import DataTable from './components/DataTable';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [entries, setEntries] = useState([]);

  const addEntry = (newEntry) => {
    setEntries([...entries, newEntry]);
  };

  return (
    <div className='App'>
      <Form addEntry={addEntry} />
      <DataTable entries={entries}/>
    </div>
  );
}

export default App;
