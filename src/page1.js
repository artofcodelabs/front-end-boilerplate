import React from 'react';
import {render} from 'react-dom';

import {main} from './helpers/common.js'
import {default as Root} from './components/Page1Root';

main();

render(<Root />, document.getElementById('root'));