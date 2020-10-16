/*
 * Random Messages
 *
 * This contains all the text for the Random container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Random';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Random container!',
  },
});
