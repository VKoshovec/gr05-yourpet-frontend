import PropTypes from 'prop-types';
import styled from './Section.module.scss'

const Section = ({ children }) => {

  return <section className={styled.sectionWrapper}>{children}</section>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
