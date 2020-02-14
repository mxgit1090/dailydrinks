import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import Button, { TYPE } from '../Button';

function Header(props) {
  const {
    formOpen,
    orderExist,
    onAdd,
  } = props;
  return (
    <h1>
      <div className="header__title">
        {!formOpen
          ? 'Daily Drinks'
          : `${orderExist ? 'Edit' : 'Add'} Order`
        }
      </div>
      {!formOpen &&
      <Button
        type={TYPE.PRIMARY}
        onClick={onAdd}
      >
        Add
      </Button>
    }
    </h1>
  );
}

Header.propTypes = {
  formOpen: PropTypes.bool,
  orderExist: PropTypes.bool,
  onAdd: PropTypes.func,
};

Header.defaultProps = {
  formOpen: false,
  orderExist: false,
  onAdd: () => {}
};

export default Header;
