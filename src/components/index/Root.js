import React from 'react';
import Nav from '../shared/Nav';
import * as mathFunc from '../../helpers/math';

const IndexRoot = () => {
  return (
    <div>
      <Nav />
      <p>{`3 cubed is ${mathFunc.cube(3)}`}</p>
      <p>{`9 squared is ${mathFunc.square(9)}`}</p>
    </div>
  )
}

export default IndexRoot;