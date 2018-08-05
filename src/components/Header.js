import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <header className='page-header'>
        <a href='#main'>
          <img className='page-header__logo' src='../img/logo.svg'/>
        </a>
      </header>
    )
  }
}

export default Header;