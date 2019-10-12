import React from 'react';
import PropTypes from 'prop-types';
import Image from '../image';
import { section, bgImg } from './section.module.scss';

const propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string,
};

function Section({ image, children }) {
  return (
    <section className={section}>
      {image ? <Image src={image} className={bgImg} alt="Background Image" /> : null}
      {children}
    </section>
  );
}

Section.propTypes = propTypes;

export default Section;
