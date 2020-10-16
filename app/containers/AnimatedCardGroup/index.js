/**
 *
 * AnimatedCardGroup
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import AnimatedCard from '../../components/AnimatedCard';

import WonderWomen from '../../images/wonderWoman.png';
import Aj from '../../images/aj.png';
import Constantine from '../../images/constantine.jpg';
import Samurai1 from '../../images/samurai1.jpg';
import Samurai2 from '../../images/samurai2.png';
import Deer from '../../images/deer.jpg';

export function AnimatedCardGroup() {
  const cardData = [
    {
      imgSrc: WonderWomen,
      name: 'Wonder Women',
      rank: 1,
    },
    {
      imgSrc: Aj,
      name: 'Ankit Joshi',
      rank: 2,
    },
    {
      imgSrc: Constantine,
      name: 'Constantine',
      rank: 3,
    },
    {
      imgSrc: Samurai1,
      name: ' Samurai 1',
      rank: 4,
    },
    {
      imgSrc: Samurai2,
      name: ' Samurai 2',
      rank: 5,
    },
    {
      imgSrc: Deer,
      name: ' Deer',
      rank: 6,
    },
  ];

  return (
    <div className="animated-card-group-primary">
      <h3 className="glitch headingGlitch">
        <span aria-hidden="true">CARD GROUP</span>
        CARD GROUP
        <span aria-hidden="true">CARD GROUP</span>
      </h3>
      <div className="animated-card-group-secondary">
        {cardData.map((data, index) => (
          <AnimatedCard
            imgSrc={data.imgSrc}
            name={data.name}
            rank={data.rank}
          />
        ))}
      </div>
    </div>
  );
}

AnimatedCardGroup.propTypes = {
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

export default compose(withConnect)(AnimatedCardGroup);
