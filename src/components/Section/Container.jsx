import PropTypes from 'prop-types';

const Section = ({ children }) => {

  return <section>{children}</section>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
