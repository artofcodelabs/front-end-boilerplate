import React from 'react';
import * as mathFunc from '../helpers/math';

const Root = () => {
  return (
    <div>
      <p>{`3 cubed is ${mathFunc.cube(3)}`}</p>
    </div>
  )
}

export default Root;