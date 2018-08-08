import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Tickets from './components/Tickets'
import './App.css';

class App extends React.Component {

  state = {
    tickets: null,
    isLoading: false
  };

  componentDidMount() {
    this.setState({isLoading: true});
    fetch('http://localhost:3000/data/tickets.json')
    .then(response => {
      return response.json()
    })
    .then(data => {
      setTimeout(() => {
        this.setState({isLoading: false, tickets: data})
      }, 1000)
    })
  }

  render() {
    const {tickets, isLoading} = this.state;

    return (
      <div className='app'>
        <Header/>
        <Sidebar/>
        {isLoading && <p>Загружаю...</p>}
        {Array.isArray(tickets) && <Tickets data={tickets}/>}
      </div>
    );
  }
}

export default App;
