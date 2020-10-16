/**
 *
 * Asynchronously loads the component for Connector
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
