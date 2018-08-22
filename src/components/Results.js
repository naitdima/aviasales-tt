import React from 'react'
import Sidebar from './Sidebar'
import Tickets from './Tickets'

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.onToggleCheckbox = this.onToggleCheckbox.bind(this);
    this.state = {
      tickets: null,
      isLoading: false,
      currency: 'rub',
      stops: []
    };
  }

  onToggleCheckbox(e) {
    const checked = e.target.checked;
    const stateKey = e.target.name;
    let stops = this.state.stops;

    const addItemArray = (arr, value) => {
      arr.push(value)
    };

    const removeItemArray = (arr, value) => {
      return arr.forEach(function (item, i, arr) {
        if (item === value) {
          arr.splice(i, 1);
        }
      });
    };

    checked === true ? addItemArray(stops, stateKey) : removeItemArray(stops, stateKey);

    this.setState(
      {
        stops: stops
      }
    );
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
    const {tickets, isLoading, currency, stops} = this.state;

    return (
      <section className='results'>
        <Sidebar currency={currency} stops={stops} onToggleCheckbox={this.onToggleCheckbox}/>
        {isLoading && <p>Загружаю...</p>}
        {Array.isArray(tickets) && <Tickets data={tickets}/>}
      </section>
    )
  }
}