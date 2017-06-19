import React from 'react';
import logo from './hipertextual-icon-mobile-landscape.svg';

class Header extends React.Component {
    render() {
      return(
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.props.title}</p>
        </div>
      );
    }
  }

Header.defaultProps = {
  title: 'Github activity'
}

export default Header;
