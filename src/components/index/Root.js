import React from 'react';
import Nav from '../shared/Nav';
import * as mathFunc from '../../helpers/math';

class Root extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active: props.match.params[0]
    };
  }

  body(){
    if(this.state.active === 'squaring')
      return this.squared()
    else if(this.state.active === 'cubing')
      return this.cubed()
    else
      return(
        <div>
          {this.cubed()}
          {this.squared()}
        </div>
      )
  }

  cubed(){
    return <p>{`3 cubed is ${mathFunc.cube(3)}`}</p>;
  }

  squared(){
    return <p>{`9 squared is ${mathFunc.square(9)}`}</p>;
  }

  render(){
    return (
      <div>
        <Nav page='index' active={this.state.active} />
        {this.body()}
      </div>
    )
  }
}

export default Root;