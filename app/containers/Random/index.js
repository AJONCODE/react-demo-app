/**
 *
 * Random
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import { motion } from 'framer-motion';
import messages from './messages';

import logo from '../../images/shikamaru.png';

import CardComponent from '../../components/CardComponent';

const items = [
  {
    header: 'Stats',
    subHeader: 'User Stats',
    description: 'data',
  },
  {
    header: 'Raise',
    subHeader: 'Fund count',
    description: 650,
  },
  {
    header: 'Total Users',
    subHeader: 'counter',
    description: 8500,
  },
  {
    header: 'Total Fund',
    subHeader: 'Fund data',
    description: 7500,
  },
  {
    header: 'Random Stats',
    subHeader: '.....',
    description: 'data',
  },
  {
    header: 'Random Stats',
    subHeader: '.....',
    description: 'data',
  },
];

export function Random() {
  return (
    <div>
      <h3 className="glitch">
        <span aria-hidden="true">Random Page</span>
        Random Page
        <span aria-hidden="true">Random Page</span>
      </h3>

      <CardComponent items={items} />

      <motion.img
        src={logo}
        alt="logo"
        style={{ width: '200px', padding: '50px' }}
        whileHover={{
          position: 'relative',
          zIndex: 1,
          scale: [1, 1.4, 1.2],
          rotate: [0, 10, -10, 0],
          filter: [
            'hue-rotate(0) contrast(100%)',
            'hue-rotate(360deg) contrast(200%)',
            'hue-rotate(45deg) contrast(300%)',
            'hue-rotate(0) contrast(100%)',
          ],
          transition: {
            duration: 0.3,
          },
        }}
      />
      <p>
        Irure consequat Lorem fugiat et cupidatat non et labore sunt tempor
        culpa anim consequat. Fugiat cupidatat labore nisi eiusmod consectetur
        fugiat. Culpa eu consequat eiusmod nulla esse ut deserunt amet. Veniam
        commodo reprehenderit cupidatat est nisi anim anim consectetur. Nostrud
        labore pariatur est veniam qui enim. Qui occaecat amet nulla ullamco
        nostrud tempor commodo amet nulla amet magna do ipsum sit. Cillum ad
        mollit nostrud ut ut. Ut anim dolor non exercitation aliqua do. Do ut
        sint sit consequat aliquip. Aliqua ut dolore commodo et nisi.
        Adipisicing sint dolore velit ea laborum incididunt ullamco sunt fugiat
        in enim voluptate Lorem.
      </p>
    </div>
  );
}

Random.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Random);
