import React from 'react';
import ReactDOM from 'react-dom';

import {main} from './helpers/common.js'
import {default as Root} from './components/IndexRoot';

main();

ReactDOM.render(<Root />, document.getElementById('root'));