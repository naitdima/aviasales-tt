import React from 'react'
import Sidebar from './Sidebar'
import Tickets from './Tickets'
import PropTypes from 'prop-types'

export default class Results extends React.Component {

  constructor(props) {
    super(props);
    this.onToggleRadio = this.onToggleRadio.bind(this);
    this.onToggleCheckbox = this.onToggleCheckbox.bind(this);
    this.checkOnlyThisCheckbox = this.checkOnlyThisCheckbox.bind(this);
    this.state = {
      currency: 'rubles',
      all: true,
      none: true,
      one: true,
      two: true,
      three: true
    };
  }

  onToggleRadio(e) {
    this.setState( { currency: e.target.value } );
  };

  onToggleCheckbox(e) {
    const stateKey = e.target.name;
    this.setState( { [`${stateKey}`]: !this.state[`${stateKey}`] } );

    if ((this.state.one === true
        && this.state.two === true
        && this.state.three === true
        && stateKey === 'none')
      ||
      (this.state.none === true
        && this.state.two === true
        && this.state.three === true
        && stateKey === 'one')
      ||
      (this.state.none === true
        && this.state.one === true
        && this.state.three === true
        && stateKey === 'two')
      || (this.state.none === true
        && this.state.one === true
        && this.state.two === true
        && stateKey === 'three')
    ) {
      this.setState( { all: true } )
    }

    if (this.state.all === false && stateKey === 'all') {
      this.setState(
        {
          none: true,
          one: true,
          two: true,
          three: true
        }
      )
    }

    if (this.state.none === true
      && this.state.one === true
      && this.state.two === true
      && this.state.three === true
      && stateKey === 'all') {
      this.setState(
        {
          none: false,
          one: false,
          two: false,
          three: false
        }
      )
    }

    if (this.state.none === true
      && this.state.one === true
      && this.state.two === true
      && this.state.three === true
      && stateKey !== 'all') {
      this.setState(
        {
          all: false
        }
      )
    }
  }

  checkOnlyThisCheckbox(e) {
    const stateKey = e.target.key;
    this.setState(
      {
        all: false,
        none: false,
        one: false,
        two: false,
        three: false
      }
    );
    this.setState( { [`${stateKey}`]: true } );
  }

  render() {
    const { currency, all, none, one, two, three } = this.state;
    const stops = {
      all: all,
      none: none,
      one: one,
      two: two,
      three: three
    };
    const { data, isLoading } = this.props;

    return (
      <section className='results'>
        <Sidebar onToggleRadio={this.onToggleRadio}
                 onToggleCheckbox={this.onToggleCheckbox}
                 checkOnlyThisCheckbox={this.checkOnlyThisCheckbox}
                 stops={stops}/>
        { isLoading && <p>Загружаю...</p> }
        { Array.isArray(data) && <Tickets currency={currency} stops={stops} data={data}/> }
      </section>
    )
  }
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired
};