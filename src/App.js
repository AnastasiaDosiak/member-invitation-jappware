import React from 'react';
import './App.css';
import UsersCatalog from './components/UsersCatalog/UsersCatalog';
import InvitationList from './components/InvitationList/InvitationList';
function App() {
  return (
    <div className="App">
    <section className="content">
    <UsersCatalog/>
    <InvitationList/>
    </section>
    </div>
  );
}

export default App;
