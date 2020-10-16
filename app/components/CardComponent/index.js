/**
 *
 * CardComponent
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { Card } from 'semantic-ui-react';

function CardComponent({ items }) {
  return (
    <Card.Group
      itemsPerRow={
        window.innerWidth > 780
          ? 3
          : window.innerWidth > 450 && window.innerWidth < 780
            ? 2
            : 1
      }
    >
      {items.map(
        (item, index) =>
          console.log('CardComponent: item: ', item) || (
            <Card key={index}>
              <Card.Content
                className={
                  index < 6
                    ? `cssCard${index + 1} grow pulse`
                    : `cssCard${Math.floor(
                      Math.random() * Math.floor(7),
                    )} grow pulse`
                }
              >
                <Card.Header style={cardHeaderStyle}>
                  {item.header.toUpperCase()}
                </Card.Header>
                <Card.Meta>{item.info}</Card.Meta>
                <Card.Description style={cardDescription}>
                  {item.description}
                </Card.Description>
              </Card.Content>
            </Card>
          ),
      )}
    </Card.Group>
  );
}

CardComponent.propTypes = {};

const cardHeaderStyle = {
  fontFamily: `'Courier Prime', monospace`,
  fontSize: '21px',
  fontWeight: 900,
};

const cardDescription = {
  fontFamily: `'Courier Prime', monospace`,
  fontSize: '18px',
  fontWeight: 700,
};

export default CardComponent;
