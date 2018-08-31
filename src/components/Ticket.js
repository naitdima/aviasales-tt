import React from 'react'
import PropTypes from 'prop-types'

export default class Ticket extends React.Component {

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
    const {currency} = this.props.currency;

    const getPrice = (price, currency) => {
      switch (currency) {
        case 'dollars':
          return price.dollars + '\u0024';
        case 'euro':
          return price.euro + '\u20AC';
        default:
          return price.rubles + '\u20BD';
      }
    };

    const getStops = (stops) => {
      if (stops > 0) {
        return stops === 1 ?
          <p className='ticket__info-stops-text'>{stops} пересадка</p>
          :
          <p className='ticket__info-stops-text'>{stops} пересадки</p>
      }
      return <p className='ticket__info-stops-text'></p>
    };

    return (
      <article className='ticket'>
        <section className='ticket__buy-section'>
          <img className='ticket__logo' src={'./img/' + carrier + '.png'} alt={carrier}/>
          <a className='ticket__buy-btn' href='#buy'>Купить<br/>за {getPrice(price, currency)}</a>
        </section>
        <section className='ticket__info-section'>
          <div className='ticket__info-departure'>
            <time className='ticket__info-time  ticket__info-time--departure'>{departure_time}</time>
            <p className='ticket__info-location  ticket__info-location--origin'>{origin}, {origin_name}</p>
            <time className='ticket__info-date  ticket__info-date--departure'>{departure_date}</time>
          </div>
          <div className='ticket__info-stops'>
            {getStops(stops)}
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
    price: PropTypes.object.isRequired
  })
};
