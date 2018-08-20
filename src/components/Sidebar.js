import React from 'react'

class Sidebar extends React.Component {
  state = {
    currency: 'rub',
    all: false,
    none: false,
    one: false,
    two: false,
    three: false
  };

  toggleCheckbox = (e) => {
    const stopName = e.target.name;
    this.setState(
      {
        [`${stopName}`]: !this.state[`${stopName}`]
      }
    );
  };

  currencyData = [
    {
      id: 1,
      class: 'sidebar__currency-label',
      text: 'RUB',
      value: 'rubles'
    },
    {
      id: 2,
      class: 'sidebar__currency-label',
      text: 'USD',
      value: 'dollars'
    },
    {
      id: 3,
      class: 'sidebar__currency-label',
      text: 'EUR',
      value: 'euro'
    }
  ];

  stopsData = [
    {
      id: 1,
      class: 'sidebar__stops-label',
      text: 'Все',
      value: 'all'
    },
    {
      id: 2,
      class: 'sidebar__stops-label',
      text: 'Без пересадок',
      value: 'none'
    },
    {
      id: 3,
      class: 'sidebar__stops-label',
      text: '1 пересадка',
      value: 'one'
    },
    {
      id: 4,
      class: 'sidebar__stops-label',
      text: '2 пересадки',
      value: 'two'
    },
    {
      id: 5,
      class: 'sidebar__stops-label',
      text: '3 пересадки',
      value: 'three'
    }
  ];

  createRadioItem(item, name) {
    return (
      <label key={item.id} className={item.class}>
        <input
          className='visually-hidden'
          type="radio" name={name}
          value={item.value}
          defaultChecked={item.id === 1 ? true : false}
        />
        {item.text}
      </label>
    )
  };

  renderRadioList(data, name) {
    let currencyList = data.map((item) => {
      return this.createRadioItem(item, name);
    });
    return currencyList
  };

  createCheckboxItem(item) {
    return (
      <label key={item.id} className={item.class}>
        <input
          className='visually-hidden'
          type="checkbox"
          name={item.value}
          onChange={this.toggleCheckbox}
        />
        {item.text}
      </label>
    )
  };

  renderCheckboxList(data) {
    let currencyList = data.map((item) => {
      return this.createCheckboxItem(item);
    });
    return currencyList
  };

  render() {
    return (
      <form className='sidebar'>
        <fieldset className='sidebar__fieldset'>
          <legend className='sidebar__legend'>Валюта</legend>
          {this.renderRadioList(this.currencyData, 'currency')};
        </fieldset>
        <fieldset className='sidebar__fieldset'>
          <legend className='sidebar__legend'>Количество пересадок</legend>
          {this.renderCheckboxList(this.stopsData)};
        </fieldset>
      </form>
    );
  }
}

export default Sidebar;