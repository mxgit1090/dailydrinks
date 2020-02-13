import * as React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
import { TYPE } from './Button.const';

function Button(props) {
  const {
    type,
    children,
    onClick
  } = props;
  return (
    <button
      className={`button ${type}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPE)),
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: TYPE.NORMAL,
  onClick: () => {}
};

export default Button;
