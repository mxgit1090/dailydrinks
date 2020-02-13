import * as React from 'react';
import PropTypes from 'prop-types';
import Button, { TYPE } from '../Button';
import './Order.scss';

function Order(props) {
  const {
    name,
    price,
    notes,
    onEdit,
    onRemove,
  } = props;
  return (
    <div className="order__container">
      <h2 className="order__name">{name}</h2>
      <h3 className="order__price">$ {price}</h3>
      <div className="order__notes">{notes}</div>
      <div className="order__button-group">
        <Button
          onClick={onEdit}
        >
          Edit
        </Button>
        <Button
          type={TYPE.DANGER}
          onClick={onRemove}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

Order.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    notes: PropTypes.string,
    onEdit: PropTypes.func,
    onRemove: PropTypes.func,
};

Order.defaultProps = {
    notes: null,
    onEdit: () => {},
    onRemove: () => {},
};

export default Order
