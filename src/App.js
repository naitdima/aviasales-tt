import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Tickets from './components/Tickets'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header/>
        <Sidebar/>
        <Tickets/>
      </div>
    );
  }
}

export default App;
