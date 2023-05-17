import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './Paragraph.module.scss';

const Paragraph = ({ children, className }) => {
  return <p className={cn(styles.Paragraph, className)}>{children}</p>;
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paragraph;
