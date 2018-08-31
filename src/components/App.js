import React from 'react'
import Header from './Header'
import Results from './Results'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: null,
      isLoading: false,
    }
  }

  componentDidMount() {
    this.setState({isLoading: true});
    fetch('data/tickets.json')
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
