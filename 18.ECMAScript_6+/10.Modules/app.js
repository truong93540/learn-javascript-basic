// Modules: Import / Expore
// C1:
// import logger from './logger/index.js'; // import những cái có module export default
// C2:
import { logger2 } from './logger/index.js';

// C1;
// import {// import những cái không có module export default
//     TYPE_LOG,
//     TYPE_ERROR,
//     TYPE_WARN
// } from './constants.js'

// C2;
import * as constants from './constants.js'
console.log(constants)

// C1
// logger('Test message...', constants.TYPE_WARN)
// C2
logger2('Test message...', constants.TYPE_WARN)


