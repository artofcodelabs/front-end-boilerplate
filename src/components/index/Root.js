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
    const cubed = <p>{`3 cubed is ${mathFunc.cube(3)}`}</p>;
    const squared = <p>{`9 squared is ${mathFunc.square(9)}`}</p>;
    if(this.state.active === 'squaring')
      return squared
    else if(this.state.active === 'cubing')
      return cubed
    else
      return <div>{cubed}{squared}</div>
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