/**
 *
 * Blockie
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import blockies from 'ethereum-blockies';

function Blockie({ address }) {
  const seed = address.toLowerCase() || '';
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
      <a href={`https://etherscan.io/address/${address}`} target="blank">
        <img src={imgUrl} alt={address} />
        <p style={pStyle}>
          {address.substring(0, 3)}..
          {address.substring(address.length - 2)}
        </p>
      </a>
    </div>
  );
}

const pStyle = {
  fontFamily: 'Gotham',
  fontSize: '11px',
  fontWeight: '600',
  color: '#ffffff',
  textAlign: 'center',
  paddingRight: '15px',
  margin: '0px',
};

Blockie.propTypes = {};

export default Blockie;
