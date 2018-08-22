import React from 'react'
import Header from './components/Header'
import Results from './components/Results'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className='app'>
        <Header/>
        <Results/>
      </div>
    );
  }
}

export default App;
