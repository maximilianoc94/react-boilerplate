import React from 'react';
import PropTypes from 'prop-types';
import ProgressiveImage from 'react-progressive-image';

const propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  alt: 'No image',
};

function Image({ src, placeholder, alt, className }) {
  return (
    <ProgressiveImage src={src} placeholder={placeholder}>
      {(img) => <img src={img} alt={alt} className={className} />}
    </ProgressiveImage>
  );
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
