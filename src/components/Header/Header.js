import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import Button, { TYPE } from '../Button';

function Header(props) {
  const {
    formOpen,
    orderExist,
    onCreate,
  } = props;
  return (
    <h1>
      <div className="header__title">
        {!formOpen
          ? 'Daily Drink'
          : `${orderExist ? 'Update' : 'Create'} Order`
        }
      </div>
      {!formOpen &&
      <Button
        type={TYPE.PRIMARY}
        onClick={onCreate}
      >
        Create
      </Button>
    }
    </h1>
  );
}

Header.propTypes = {
  formOpen: PropTypes.bool,
  orderExist: PropTypes.bool,
  onCreate: PropTypes.func,
};

export default Header;
