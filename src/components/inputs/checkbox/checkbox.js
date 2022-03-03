import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Typography from '../../typography';

import styles from './checkbox.module.scss';

const propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  flip: PropTypes.bool,
  size: PropTypes.number,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,
};

const Checkbox = ({
  label,
  className: propsClassName,
  inputClassName,
  name,
  hasError,
  errorMessage,
  disabled = false,
  checked,
  onClick,
  required,
  flip = false,
  size = 20,
  ...rest
}) => {
  const className = cx(styles.label, propsClassName, {
    [styles.error]: hasError,
  });
  return (
    <>
      <label htmlFor={name} className={className} disabled={disabled}>
        {flip && (
          <Typography
            component="span"
            variant="body1"
            style={{ marginRight: '16px' }}
          >
            {label}
            {required ? '*' : ''}
          </Typography>
        )}
        <input
          id={name}
          className={inputClassName}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onClick={onClick}
          style={{ maxWidth: `${size}px`, height: `${size}px` }}
          {...rest}
        />
        {!flip && (
          <Typography component="span" variant="body1">
            {label}
            {required ? '*' : ''}
          </Typography>
        )}
      </label>
      {hasError && errorMessage && (
        <Typography
          variant="body2"
          color="error-red"
          className={styles['error-message']}
          align="left"
        >
          {errorMessage}
        </Typography>
      )}
    </>
  );
};

Checkbox.propTypes = propTypes;

export default Checkbox;
