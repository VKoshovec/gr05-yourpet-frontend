import PropTypes from 'prop-types';
import styled from './Section.module.scss'
import cn from 'classnames';

const Section = ({ children, className }) => {

  return <section className={cn(styled.sectionWrapper,className)}>{children}</section>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
