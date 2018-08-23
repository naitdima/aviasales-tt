import React from 'react'
import PropTypes from "prop-types"

class Ticket extends React.Component {
  render() {
    const {
      origin,
      origin_name,
      destination,
      destination_name,
      departure_date,
      departure_time,
      arrival_date,
      arrival_time,
      carrier,
      stops,
      price
    } = this.props.data;

    return (
      <article className='ticket'>
        <section className='ticket__buy-section'>
          <img className='ticket__logo' src={'../img/' + carrier + '.png'} alt={carrier}/>
          <a className='ticket__buy-btn' href='#buy'>Купить за {price}&#8381;</a>
        </section>
        <section className='ticket__info-section'>
          <div className='ticket__info-departure'>
            <time className='ticket__info-time  ticket__info-time--departure'>{departure_time}</time>
            <p className='ticket__info-location  ticket__info-location--origin'>{origin}, {origin_name}</p>
            <time className='ticket__info-date  ticket__info-date--departure'>{departure_date}</time>
          </div>
          <div className='ticket__info-stops'>
            {
              stops === 1 ?
              <p className='ticket__info-stops-text'>{stops}<br/>пересадка</p>
              :
              <p className='ticket__info-stops-text'>{stops}<br/>пересадки</p>
            }
          </div>
          <div className='ticket__info-arrival'>
            <time className='ticket__info-time  ticket__info-time--arrival'>{arrival_time}</time>
            <p className='ticket__info-location  ticket__info-location--destination'>{destination}, {destination_name}</p>
            <time className='ticket__info-date  ticket__info-date--arrival'>{arrival_date}</time>
          </div>
        </section>
      </article>
    );
  }
}

Ticket.propTypes = {
  data: PropTypes.shape({
    origin: PropTypes.string.isRequired,
    origin_name: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    destination_name: PropTypes.string.isRequired,
    departure_date: PropTypes.string.isRequired,
    departure_time: PropTypes.string.isRequired,
    arrival_date: PropTypes.string.isRequired,
    arrival_time: PropTypes.string.isRequired,
    carrier: PropTypes.string.isRequired,
    stops: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  })
};

export default Ticket;
