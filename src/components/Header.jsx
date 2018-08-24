import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <header className='page-header'>
        <a>
          <img className='page-header__logo' src='../img/logo.svg' width='60' height='60' alt='logo'/>
        </a>
      </header>
    )
  }
}

export default Header;
