import React from 'react'
import Header from './components/Header'
import Results from './components/Results'
import './App.css';

class App extends React.Component {
  state = {
    tickets: null,
    isLoading: false,
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
    const data = this.state.tickets;
    return (
      <div className='app'>
        <Header/>
        <Results isLoading={this.state.isLoading} data={data}/>
      </div>
    );
  }
}

export default App;
