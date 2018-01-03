import React from 'react';
import PropTypes from 'prop-types';

class Nav extends React.Component{
  isOnIndex(){
    return this.props.page === 'index';
  }

  isOnSubmenu(){
    return ['squaring', 'cubing'].includes(this.props.active);
  }

  indexLink(){
    if(this.isOnIndex() && !this.isOnSubmenu())
      return <b>Index</b>
    return <a href="index.html">Index</a>
  }

  page1Link(){
    if(this.props.page === 'page1')
      return <b>Page 1</b>
    return <a href="page1.html">Page 1</a>
  }

  squaringLink(){
    if(this.props.active === 'squaring')
      return <b>Squaring</b>
    return <a href="squaring.html">Squaring</a>
  }

  cubingLink(){
    if(this.props.active === 'cubing')
      return <b>Cubing</b>
    return <a href="cubing.html">Cubing</a>
  }

  submenu(){
    if(!this.isOnIndex())
      return
    return(
      <ul>
        <li>{this.squaringLink()}</li>
        <li>{this.cubingLink()}</li>
      </ul>
    )
  }

  render(){
    return(
      <nav>
        <ul>
          <li>
            {this.indexLink()}
            {this.submenu()}
          </li>
          <li>{this.page1Link()}</li>
        </ul>
      </nav>
    )
  }
}

Nav.propTypes = {
  page: PropTypes.string,
  active: PropTypes.string.isRequired
};

export default Nav;