import React from 'react'
import Ticket from './Ticket'
import PropTypes from "prop-types"

class Tickets extends React.Component {
  renderTickets = () => {
    const {data} = this.props;
    let ticketsList = null;

    if (data.length) {
      ticketsList = data.map(function (item) {
        return <Ticket key={item.price} data={item}/>
      })
    } else {
      ticketsList = <p>К сожалению подходящих билетов нет</p>
    }

    return ticketsList
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

export default Tickets;
