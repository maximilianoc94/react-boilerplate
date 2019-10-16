import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  icon: PropTypes.string.isRequired,
};

function Icon({ icon, ...props }) {
  // eslint-disable-next-line import/no-dynamic-require
  const renderIcon = () => require(`./types/${icon}`).default;
  const SVG = renderIcon();
  return <SVG {...props} />;
}

Icon.propTypes = propTypes;
export default Icon;
