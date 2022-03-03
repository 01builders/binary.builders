import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon, { AVAILABLE_ICONS } from '../../icons';
import Typography from '../../typography';

import styles from './input.module.scss';

const propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,
};

const Input = React.forwardRef(
  (
    { label, className: propsClassName, hasError, errorMessage, required, ...props },
    ref
  ) => {
    const className = classNames(styles.base, propsClassName);

    const inputClassName = classNames(styles['no-error'], {
      [styles['has-error']]: hasError,
    });

    return (
      <div className={className}>
        <label htmlFor={props.name}>
          {label && (
            <Typography
              variant="body1"
              color={hasError ? 'error-red' : 'black'}
              component="span"
            >
              {required ? `${label}*` : label}
            </Typography>
          )}
          <input ref={ref} className={inputClassName} {...props} />
          {hasError && (
            <>
              <Icon
                i={AVAILABLE_ICONS.WARNING}
                size={16}
                color="error-red"
                className={`${styles['error-icon']} ${label && styles['with-label']}`}
              />
              {errorMessage && (
                <Typography
                  variant="body2"
                  color="error-red"
                  className={styles['error-message']}
                >
                  {errorMessage}
                </Typography>
              )}
            </>
          )}
        </label>
      </div>
    );
  }
);

Input.propTypes = propTypes;

export default Input;
