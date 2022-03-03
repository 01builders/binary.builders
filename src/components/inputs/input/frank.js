import React, { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon, { AVAILABLE_ICONS } from '../../icons';
import Button from '../../buttons';
import styles from './input.module.scss';

const propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const Frank = ({ placeholder, onChange, ...props }) => {
  const inputRef = useRef(null);
  const [isEditing, setEditing] = useState(false);

  const [value, setValue] = useState(props.value);

  const handleInputChange = useCallback(
    (event) => setValue(event.currentTarget.value),
    []
  );

  const handleChange = useCallback(() => {
    setEditing(false);
    onChange(value);
  }, [value, onChange]);

  const handleIconClick = useCallback(() => {
    if (!isEditing) {
      setEditing(true);
      if (inputRef) {
        inputRef.current.focus();
      }
    } else {
      handleChange();
    }
  }, [isEditing, handleChange]);

  const handleKeyUp = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        handleChange();
      }
    },
    [handleChange]
  );

  const className = classNames(styles.base, styles.frank, props.className, {
    [styles.isEditing]: isEditing,
  });

  return (
    <div className={styles['input-area']}>
      <input
        {...props}
        ref={inputRef}
        className={className}
        placeholder={placeholder}
        value={value}
        size={value.length || placeholder.length}
        readOnly={!isEditing}
        onChange={handleInputChange}
        onKeyUp={handleKeyUp}
      />

      <Button
        variant="icon"
        onClick={handleIconClick}
        className={styles['edit-icon-button']}
      >
        <Icon
          i={isEditing ? AVAILABLE_ICONS.CHECK1 : AVAILABLE_ICONS.EDIT}
          color="light-blue"
          size={16}
        />
      </Button>
    </div>
  );
};

Frank.propTypes = propTypes;

export default Frank;
