import React from 'react'
import Ticket from './Ticket'
import PropTypes from 'prop-types'

export default class Tickets extends React.Component {
  constructor(props) {
    super(props);
  }

  sortByPrice = (a, b, currency) => {
    return a.price[currency] - b.price[currency]
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

  sortTickets = (data, currency, stops) => {
    if (data.length) {
      return data.sort((a, b) => {
            return this.sortByPrice(a, b, currency)
          }).filter((item) => {
        return this.filterByStops(item, stops)
          })
    }
    return data
  };

  renderTickets = () => {
    const currency = this.props;
    const data = this.sortTickets(this.props.data, this.props.currency, this.props.stops);
    if (data.length) {
      return data.map(function (item) {
            return <Ticket key={item.id} data={item} currency={currency}/>
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
