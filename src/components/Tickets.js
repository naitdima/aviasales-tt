import React from 'react'
import Ticket from './Ticket'
import PropTypes from 'prop-types'

export default class Tickets extends React.Component {
  constructor(props) {
    super(props);
  }

  sortByPrice = (a, b) => {
    return a.price - b.price
  };

  filterByStops = (item, stops) => {
    const checkArray = (array, value) => {
      for (let i = 0; i < array.length; i++) {
        let item = array[i] === 'all' ? array[i] : Number(array[i]);
        if (item === value) {
          return true
        }
      }
      return false
    };

    if (stops.length) {
      if (checkArray(stops, 'all')) {
        return true
      } else if (checkArray(stops, item.stops)) {
        return true
      } else {
        return false
      }
    }
    return true
  };

  sortTickets = (data, stops) => {
    if (data.length) {
      return data.sort((a, b) => {
            return this.sortByPrice(a, b)
          }).filter((item) => {
            return this.filterByStops(item, stops)
          })
    }
    return data
  };

  renderTickets = () => {
    const data = this.sortTickets(this.props.data, this.props.stops);
    if (data.length) {
      return data.map(function (item) {
            return <Ticket key={item.price} data={item}/>
          })
    } else {
      return <p>К сожалению подходящих билетов нет</p>
    }
  };

  render() {
    return (
      <section className='tickets-list'>
        {this.renderTickets()};
      </section>
    )
  }
}

Tickets.propTypes = {
  data: PropTypes.array.isRequired,
};
