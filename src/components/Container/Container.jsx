import PropTypes from 'prop-types';
import { Cont } from './Container.styled';

const Container = ({ children }) => {
  return <Cont>{children}</Cont>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;