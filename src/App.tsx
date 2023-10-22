import React from 'react';
import './App.css';
import InputTask from './components/InputTask';
import AddTask from './components/AddTask';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <div className="task">
        <InputTask />
        <AddTask />
      </div>
    </RecoilRoot>
  );
}

export default App;
