import React from 'react'
import Sidebar from './Sidebar'
import Tickets from './Tickets'
import PropTypes from 'prop-types'

export default class Results extends React.Component {

  constructor(props) {
    super(props);
    this.onToggleRadio = this.onToggleRadio.bind(this);
    this.onToggleCheckbox = this.onToggleCheckbox.bind(this);
    this.state = {
      currency: 'rubles',
      stops: []
    };
  }

  onToggleRadio(e) {
    this.setState(
      {
        currency: e.target.value
      }
    );
  };

  onToggleCheckbox(e) {
    const checked = e.target.checked;
    const stateKey = e.target.name;
    let stops = this.state.stops;

    const addItemArray = (arr, value) => arr.push(value);

    const removeItemArray = (arr, value) => {
      return arr.forEach((item, i, arr) => {
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

  render() {
    const {currency, stops} = this.state;
    const {data, isLoading} = this.props;

    return (
      <section className='results'>
        <Sidebar onToggleRadio={this.onToggleRadio} onToggleCheckbox={this.onToggleCheckbox}/>
        {isLoading && <p>Загружаю...</p>}
        {Array.isArray(data) && <Tickets currency={currency} stops={stops} data={data}/>}
      </section>
    )
  }
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired
};