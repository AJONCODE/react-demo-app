/**
 *
 * AnimatedCard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import streamer1 from '../../images/streamers/streamer1.jpg';
import streamer2 from '../../images/streamers/streamer2.jpg';
import streamer3 from '../../images/streamers/streamer3.jpg';

function AnimatedCard({ imgSrc, name, rank }) {
  return (
    <div className="game">
      <div className="rank">{rank}</div>

      <div className="front">
        <img className="card-img" src={imgSrc} alt={name} />
        <h3 className="name">{name}</h3>
        <div className="stats">
          <p className="icon-fa viewers">539.9k</p>
          <div className="streamers">
            <img src={streamer1} alt="" />
            <img src={streamer2} alt="" />
            <img src={streamer3} alt="" />
          </div>
        </div>
      </div>

      <div className="back">
        <div className="streaming-info">
          <p className="game-stat">
            559k<span>Watching</span>
          </p>
          <p className="game-stat">
            25.8k<span>Streams</span>
          </p>
        </div>
        <button className="btn-card">See more streams</button>
        <div className="streamers">
          <div className="streamer">
            <div className="icon-fa icon">
              <img src={streamer1} alt="" />
            </div>
            <p className="name">Gamer1</p>
            <p className="number">37.1k</p>
          </div>
          <div className="streamer">
            <div className="icon-fa icon">
              <img src={streamer2} alt="" />
            </div>
            <p className="name">Gamer2</p>
            <p className="number">35.5k</p>
          </div>
          <div className="streamer">
            <div className="icon-fa icon">
              <img src={streamer3} alt="" />
            </div>
            <p className="name">Gamer3</p>
            <p className="number">34.8k</p>
          </div>
        </div>
      </div>

      <div className="background">
        <img src={imgSrc} alt={name} />
      </div>

      <svg width="0" height="0" x="0px" y="0px">
        <defs>
          <clipPath id="wave" clipPathUnits="objectBoundingBox">
            <path
              d="M1.5,0H1H0.5H0v0.8C0.3,0.8,0.3,1,0.5,1c0,0,0,0,0,0C0.8,1,0.8,0.8,1,0.8c0,0,0,0,0,0C1.3,0.8,1.3,1,1.5,1
	C1.8,1,1.8,0.8,2,0.8V0H1.5z"
            />
            <animateTransform
              attributeType="XML"
              attributeName="transform"
              type="translate"
              from="0 0"
              to="-170 0"
              begin="0s"
              dur="10s"
              repeatCount="indefinite"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

AnimatedCard.propTypes = {};

export default AnimatedCard;
