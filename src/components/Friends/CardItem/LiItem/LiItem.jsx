import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './LiItem.module.scss';

const Li = ({ children, className }) => {
  return <li className={cn(styles.li, className)}>{children}</li>;
};

Li.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Li;
