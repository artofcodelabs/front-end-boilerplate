import React from 'react';

class Nav extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <nav>
        <ul>
          <li>
            <a href="index.html">Index</a>
            <ul>
              <li>Squaring</li>
              <li>Cubing</li>
            </ul>
          </li>
          <li><a href="page1.html">Page 1</a></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;