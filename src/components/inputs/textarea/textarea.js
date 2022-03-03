import React, { useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon, { AVAILABLE_ICONS } from '../../icons';
import Typography from '../../typography';

import styles from './textarea.module.scss';

const propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  hasError: PropTypes.bool,
  hasCharacterCounter: PropTypes.bool,
  characterMinimum: PropTypes.shape({
    count: PropTypes.number,
    label: PropTypes.string,
  }),
  name: PropTypes.string,
  errorMessage: PropTypes.string,
};

const wordCounter = (string) => {
  const count = string.split(' ').filter((str) => str !== '').length;
  return count;
};

const counter = (type, string) => {
  if (!string) return 0;
  switch (type) {
    case 'word':
      return wordCounter(string);
    default:
      return string.length;
  }
};

const Textarea = forwardRef(
  (
    {
      label,
      className: propsClassName,
      hasError,
      errorMessage,
      hasCharacterCounter,
      hasWordCounter,
      wordMinimum,
      characterMinimum,
      name,
      onChange,
      value,
      ...props
    },
    ref
  ) => {
    const className = classNames(styles.base, {
      [styles['has-error']]: hasError,
    });

    useEffect(() => {
      const e = {
        target: {
          value,
          wordCount: counter('word', value),
        },
      };
      onChange(e);
    }, [value, onChange]);

    return (
      <div className={`${propsClassName} ${styles['input-area']}`}>
        <label className={styles['label-container']} htmlFor={name}>
          {label && (
            <Typography
              color={hasError ? 'error-red' : 'black'}
              variant="body1"
              component="span"
            >
              {label}
            </Typography>
          )}
          <textarea
            ref={ref}
            className={className}
            onChange={(e) => {
              e.target.wordCount = counter('word', e.target.value);
              onChange(e);
            }}
            value={value}
            {...props}
          />
          {hasError && (
            <>
              <Icon
                i={AVAILABLE_ICONS.WARNING}
                size={16}
                color="error-red"
                className={styles['error-icon']}
              />
              <Typography
                variant="body2"
                color="error-red"
                className={styles['error-message']}
              >
                {errorMessage}
              </Typography>
            </>
          )}
          {(hasCharacterCounter || hasWordCounter) && (
            <div className={styles['character-counter']}>
              <Typography variant="body2" color="light-blue" component="span">
                {counter(
                  (hasCharacterCounter && 'character') ||
                    (hasWordCounter && 'word'),
                  value
                ) || 0}{' '}
                / {hasCharacterCounter && characterMinimum.count}
                {hasWordCounter && wordMinimum.count}
              </Typography>
              <Typography variant="body2" component="span">
                &nbsp;{hasCharacterCounter && characterMinimum.label}
                {hasWordCounter && wordMinimum.label}
              </Typography>
            </div>
          )}
        </label>
      </div>
    );
  }
);

Textarea.propTypes = propTypes;

export default Textarea;
