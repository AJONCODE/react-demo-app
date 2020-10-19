/**
 *
 * Asynchronously loads the component for Tokenomics
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
