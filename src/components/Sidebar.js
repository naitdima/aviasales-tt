import React from 'react'

class Sidebar extends React.Component {
  state = {
    currencyData: [
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
    ],
    transferData: [
      {
        id: 1,
        class: 'sidebar__transfer-label',
        text: 'Все',
        value: 'all'
      },
      {
        id: 2,
        class: 'sidebar__transfer-label',
        text: 'Без пересадок',
        value: 'none'
      },
      {
        id: 3,
        class: 'sidebar__transfer-label',
        text: '1 пересадка',
        value: 'one'
      },
      {
        id: 4,
        class: 'sidebar__transfer-label',
        text: '2 пересадки',
        value: 'two'
      },
      {
        id: 5,
        class: 'sidebar__transfer-label',
        text: '3 пересадки',
        value: 'three'
      }
    ]
  };

  createCheckboxItem = (item) => {
    return (
      <label key={item.id} className={item.class}>
        <input className='visually-hidden' type="checkbox" name={item.value}/>
        {item.text}
      </label>
    )
  };

  renderCheckboxList = (data) => {
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
          {this.renderCheckboxList(this.state.currencyData)};
        </fieldset>
        <fieldset className='sidebar__fieldset'>
          <legend className='sidebar__legend'>Количество пересадок</legend>
          {this.renderCheckboxList(this.state.transferData)};
        </fieldset>
      </form>
    );
  }
}

export default Sidebar;