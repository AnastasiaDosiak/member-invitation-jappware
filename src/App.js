import React from 'react';
import './App.css';
import UsersCatalog from './components/UsersCatalog/UsersCatalog';
import InvitationList from './components/InvitationList/InvitationList';
function App() {
  return (
    <div className="App">
    <UsersCatalog/>
    <InvitationList/>
    </div>
  );
}

export default App;
