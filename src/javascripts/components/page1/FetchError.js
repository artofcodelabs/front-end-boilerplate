import React from 'react';
import PropTypes from 'prop-types';

const FetchError = ({msg, onRetry}) => (
  <div>
    <p style={{color: 'red'}}>{msg}</p>
    {onRetry
      ? <button onClick={onRetry}>Retry</button>
      : ''
    }
  </div>
);

FetchError.propTypes = {
  msg: PropTypes.string.isRequired,
  onRetry: PropTypes.func,
};

export default FetchError;