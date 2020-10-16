/**
 *
 * Asynchronously loads the component for Random
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
