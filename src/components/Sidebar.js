import React from 'react'

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.toggleRadio = this.toggleRadio.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }

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
      value: 0
    },
    {
      id: 3,
      class: 'sidebar__stops-label',
      text: '1 пересадка',
      value: 1
    },
    {
      id: 4,
      class: 'sidebar__stops-label',
      text: '2 пересадки',
      value: 2
    },
    {
      id: 5,
      class: 'sidebar__stops-label',
      text: '3 пересадки',
      value: 3
    }
  ];

  createRadioItem(item, name) {
    return (
      <label key={item.id} className={item.class}>
        <input
          className='visually-hidden'
          type="radio" name={name}
          value={item.value}
          defaultChecked={item.id === 1}
          onChange={this.toggleRadio}
        />
        {item.text}
      </label>
    )
  };

  renderRadioList (data, name) {
    return data.map((item) => {
      return this.createRadioItem(item, name);
    });
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
    return data.map((item) => {
      return this.createCheckboxItem(item);
    });
  };

  toggleRadio(e) {
    this.props.onToggleRadio(e)
  };

  toggleCheckbox(e) {
    this.props.onToggleCheckbox(e)
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
