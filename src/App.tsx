import React from 'react';
import './App.module.scss';
import LoginTab from './components/auth/LoginForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <LoginTab />
    </div>
  );
};

export default App;
