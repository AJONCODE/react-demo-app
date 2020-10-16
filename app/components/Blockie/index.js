/**
 *
 * Blockie
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import blockies from 'ethereum-blockies';

function Blockie({ tronAddress }) {
  const seed = tronAddress.toLowerCase() || '';
  const imgUrl = blockies
    .create({
      // All options are optional
      seed, // seed used to generate icon data, default: random
      color: '#e512ff', // to manually specify the icon color, default: random
      bgcolor: '#ffa500', // choose a different background color, default: random
      size: 8, // width/height of the icon in blocks, default: 8
      scale: 5, // width/height of each block in pixels, default: 4
      spotcolor: '#fff', // each pixel has a 13% chance of being of a third color,
      // default: random. Set to -1 to disable it. These "spots" create structures
      // that look like eyes, mouths and noses.
    })
    .toDataURL();
  return (
    <div>
      <a href={`https://etherscan.io/address/${tronAddress}`} target="blank">
        <img src={imgUrl} alt={tronAddress} />
        <p style={pStyle}>
          {tronAddress.substring(0, 3)}..
          {tronAddress.substring(tronAddress.length - 2)}
        </p>
      </a>
    </div>
  );
}

const pStyle = {
  fontFamily: 'Gotham',
  fontSize: '13px',
  fontWeight: '700',
  color: '#ffffff',
  textAlign: 'center',
  paddingRight: '10px',
  margin: '0px',
};

Blockie.propTypes = {};

export default Blockie;
