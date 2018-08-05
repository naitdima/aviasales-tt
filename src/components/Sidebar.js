import React from 'react'

class Sidebar extends React.Component {
  render() {
    return (
      <form className='sidebar'>
        <fieldset>
          <legend>Валюта</legend>
          <label>
            <input className='visually-hidden' type="checkbox"/>
            RUB
          </label>
          <label>
            <input className='visually-hidden' type="checkbox"/>
            USD
          </label>
          <label>
            <input className='visually-hidden' type="checkbox"/>
            EUR
          </label>
        </fieldset>
        <fieldset>
          <legend>Количество пересадок</legend>
          <label>
            <input className='visually-hidden' type="checkbox"/>
            Все
          </label>
          <label>
            <input className='visually-hidden' type="checkbox"/>
            Без пересадок
          </label>
          <label>
            <input className='visually-hidden' type="checkbox"/>
            1 пересадка
          </label>
          <label>
            <input className='visually-hidden' type="checkbox"/>
            2 пересадки
          </label>
          <label>
            <input className='visually-hidden' type="checkbox"/>
            3 пересадки
          </label>
        </fieldset>
      </form>
    );
  }
}

export default Sidebar;