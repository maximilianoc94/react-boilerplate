import React from 'react';
import PropTypes from 'prop-types';
import ProgressiveImage from 'react-progressive-image';

const propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

function Image({ src, alt, className }) {
  return (
    <ProgressiveImage src={src} placeholder="tiny-image.jpg">
      {(img) => <img src={img} alt={alt} className={className} />}
    </ProgressiveImage>
  );
}

Image.propTypes = propTypes;

export default Image;
