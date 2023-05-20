import { Button } from 'antd';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from './CustomButton.module.scss'

const CustomButton = ({ className, children, type, ...props }) => {

  // type = outlined || flooded

  return (<Button
      className={cn(className, type, styled.customButton ) }
      {...props}
    >
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['outlined', 'flooded']).isRequired,
};

export default CustomButton;
