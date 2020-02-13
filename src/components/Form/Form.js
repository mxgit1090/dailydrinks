import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button, { TYPE } from '../Button';
import './Form.scss';

function Form(props) {
  const {
    order,
    submit,
    cancel
  } = props;
  // Init only once for existing props
  const [error, setError] = useState({});
  const [name, setName] = useState(order?.name ?? '');
  const [price, setPrice] = useState(order?.price ?? 0);
  const [notes, setNotes] = useState(order?.notes ?? '');
  const setErrorField = (fieldName, fieldErrored) => {
    setError(errorToMutate => ({
      ...errorToMutate,
      [fieldName]: fieldErrored
    }));
  }
  const onSubmit = () => {
    // Check required fields:
    if (!name) {
      setErrorField('name', true);
    } else {
      submit({
        id: order?.id ?? null,
        name,
        price,
        notes,
      });
    }
  };
  return (
    <div id="form">
      <label
        htmlFor="name"
        className={`form__label ${error.name && 'form__label-error'}`}
      >
        <span className="form__label-alert">*</span>Name
      </label>
      <input
        name="name"
        className={`form__input ${error.name && 'form__input-error'}`}
        placeholder="Please input name"
        value={name}
        onChange={event => {
          setName(event.target.value);
          setErrorField('name', false);
        }}
      />
      <label
        htmlFor="price"
        className="form__label"
      >
        Price
      </label>      
      <input
        name="price"
        className="form__input"
        type="number"
        min="0"
        placeholder="Please input price number"
        value={price}
        onChange={event => {
          setPrice(event.target.value);
        }}
      />
      <label
        htmlFor="notes"
        className="form__label"
      >
        Notes
      </label>
      <textarea
        name="notes"
        className="form__input"
        rows={5}
        placeholder="Please input notes (optional)"
        value={notes}
        onChange={event => {
          setNotes(event.target.value);
        }}
      />
      <div className="form__button-group">
        <Button
          type={TYPE.PRIMARY}
          onClick={onSubmit}
        >
          Submit
        </Button>
        <Button
          type={TYPE.NORMAL}
          onClick={cancel}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

Form.propTypes = {
  order: PropTypes.object,
  submit: PropTypes.func,
};

Form.defaultProps = {
  order: null,
  submit: () => {},
  cancel: () => {}
};

export default Form;
