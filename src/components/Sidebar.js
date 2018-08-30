import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.toggleRadio = this.toggleRadio.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.checkOnlyThisCheckbox = this.checkOnlyThisCheckbox.bind(this);
  }

  createRadioItem(item, name) {
    const labelClasses = classNames({
      [item.class]: true,
      [item.class + '--first-col']: item.id === 0 || item.id === 3 || item.id === 6,
      [item.class + '--second-col']: item.id === 1 || item.id === 4 || item.id === 7,
      [item.class + '--third-col']: item.id === 2 || item.id === 5 || item.id === 8
    });
    return (
      <React.Fragment key={item.value}>
        <input className='visually-hidden'
               id={item.value}
               type="radio" name={name}
               onChange={this.toggleRadio}
               value={item.value}
               defaultChecked={item.id === 0}
        />
        <label key={item.id}
               className={labelClasses}
               htmlFor={item.value}>
          {item.text}
        </label>
      </React.Fragment>
    )
  };

  renderRadioList (data, name) {
    return data.map(item => this.createRadioItem(item, name))
  };

  createCheckboxItem(item) {
    return (
      <React.Fragment key={item.value}>
        <input className='visually-hidden'
               id={item.value}
               type="checkbox"
               onChange={this.toggleCheckbox}
               name={item.value}
               checked={this.props.stops[`${item.value}`]}
        />
        <label className={item.class}
               key={item.id}
               htmlFor={item.value}>
          {item.text}
          {
            item.value !== 'all'
            &&
            <span key={item.value} onClick={this.checkOnlyThisCheckbox} className='sidebar__stops-only'>Только</span>
          }
        </label>
      </React.Fragment>
    )
  };

  renderCheckboxList(data) {
    return data.map(item => this.createCheckboxItem(item))
  };

  toggleRadio(e) { this.props.onToggleRadio(e) };

  toggleCheckbox(e) { this.props.onToggleCheckbox(e) };

  checkOnlyThisCheckbox (e) { this.props.checkOnlyThisCheckbox(e) };

  render() {

    const currencyData = [
      {
        id: 0,
        class: 'sidebar__currency-label',
        text: 'RUB',
        value: 'rubles'
      },
      {
        id: 1,
        class: 'sidebar__currency-label',
        text: 'USD',
        value: 'dollars'
      },
      {
        id: 2,
        class: 'sidebar__currency-label',
        text: 'EUR',
        value: 'euro'
      }
    ];

    const stopsData = [
      {
        id: 0,
        class: 'sidebar__stops-label',
        text: 'Все',
        value: 'all'
      },
      {
        id: 1,
        class: 'sidebar__stops-label',
        text: 'Без пересадок',
        value: 'none'
      },
      {
        id: 2,
        class: 'sidebar__stops-label',
        text: '1 пересадка',
        value: 'one'
      },
      {
        id: 3,
        class: 'sidebar__stops-label',
        text: '2 пересадки',
        value: 'two'
      },
      {
        id: 4,
        class: 'sidebar__stops-label',
        text: '3 пересадки',
        value: 'three'
      }
    ];

    return (
      <form className='sidebar'>
        <fieldset className='sidebar__fieldset  sidebar__fieldset--currency'>
          <legend className='sidebar__legend  sidebar__legend--currency'>Валюта</legend>
          <div className='sidebar__currency-wrap'>
            {this.renderRadioList(currencyData, 'currency')}
          </div>
        </fieldset>
        <fieldset className='sidebar__fieldset  sidebar__fieldset--stops'>
          <legend className='sidebar__legend  sidebar__legend--stops'>Количество пересадок</legend>
          {this.renderCheckboxList(stopsData)}
        </fieldset>
      </form>
    );
  }
}

Sidebar.propTypes = {
  onToggleRadio: PropTypes.func.isRequired,
  onToggleCheckbox: PropTypes.func.isRequired,
  checkOnlyThisCheckbox: PropTypes.func.isRequired,
  stops: PropTypes.object.isRequired
};
