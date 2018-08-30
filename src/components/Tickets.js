import React from 'react'
import Ticket from './Ticket'
import PropTypes from 'prop-types'

export default class Tickets extends React.Component {

  sortTickets(data, currency, stops) {

    const sortByPrice = (a, b, currency) => {
      return a.price[currency] - b.price[currency]
    };

    const filterByStops = (item, stops) => {
      const getItemStopsValue = (item) => {
        switch(item.stops) {
          case 0:
            return 'none';
          case 1:
            return 'one';
          case 2:
            return 'two';
          case 3:
            return 'three';
          default:
            return item.stops
        }
      };

      if (stops.all === true) {
        return true
      } else if (stops[`${getItemStopsValue(item)}`] === true) {
        return true
      }
      return false
    };

    if (data.length) {
      return data.sort((a, b) => {
            return sortByPrice(a, b, currency)
          }).filter((item) => {
        return filterByStops(item, stops)
          })
    }
    return data
  };

  renderTickets() {
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
        {this.renderTickets()}
      </section>
    )
  }
}

Tickets.propTypes = {
  currency: PropTypes.string.isRequired,
  stops: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired
};
