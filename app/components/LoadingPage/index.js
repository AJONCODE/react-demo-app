/**
 *
 * LoadingPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import spinner from '../../images/spinner.gif';

function LoadingPage({ text = 'Loading', speed = 300 }) {
  const [content, setContent] = React.useState(text);

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setContent(content =>
        content === `${text}...` ? setContent(text) : setContent(`${content}.`),
      );
    }, speed);

    return () => clearInterval(id);
  }, [text, speed]);

  return (
    <div className="loadingMain">
      <img className="spinner" src={spinner} alt={spinner} />
      <span className="spinnerText">{content}</span>
    </div>
  );
}

LoadingPage.propTypes = {};

export default LoadingPage;
