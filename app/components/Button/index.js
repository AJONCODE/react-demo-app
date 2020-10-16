/**
 *
 * Button
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { debounce, throttle } from 'throttle-debounce';

import './button.scss';

function Button({ id, className, children, loading, handleButtonClick }) {
  const searchCall = event => {
    console.log('searchCall: event: ', event);
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (handleButtonClick) {
      if (!loading) {
        handleButtonClick(event);
      }
    }
  };

  React.useEffect(() => {
    if (loading) {
      const element = document.getElementById(`${id}`);
      element.classList.add('loadingSpinner');
    } else {
      const element = document.getElementById(`${id}`);
      element.classList.remove('loadingSpinner');
    }
  }, [loading]);

  return (
    <React.Fragment>
      <button
        className={className}
        disabled={loading}
        onClick={debounce(500, searchCall)}
      >
        <span id={id} className="" />
        <span className={!loading ? '' : 'hide'}>{children}</span>
      </button>
    </React.Fragment>
  );
}

Button.propTypes = {};

export default Button;
