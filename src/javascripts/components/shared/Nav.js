import React from 'react';

class Nav extends React.Component{
  constructor(props){
    super(props);
  }

  isOnIndex(){
    return this.props.page === 'index';
  }

  indexLink(){
    const sublinks = ['squaring', 'cubing'];
    if(this.isOnIndex() && !sublinks.includes(this.props.active))
      return <b>Index</b>
    return <a href="index.html">Index</a>
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
          <li><a href="page1.html">Page 1</a></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;