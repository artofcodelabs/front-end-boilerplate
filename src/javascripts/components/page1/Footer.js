import React from 'react';
import Link from './Link';

const Footer = () => (
  <div>
    <hr />

    <p>
      Show:

      {' '}

      <Link
        active={true}
        onClick={() => (console.log('all clicked'))}
      >
        All
      </Link>

      {', '}

      <Link
        active={false}
        onClick={() => (console.log('read clicked'))}
      >
        Read
      </Link>

      {', '}

      <Link
        active={false}
        onClick={() => (console.log('unread clicked'))}
      >
        Unread
      </Link>
    </p>
  </div>
);

export default Footer;