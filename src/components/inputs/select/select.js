import React, { useState } from 'react';
import ReactSelect from 'react-select';
import cx from 'classnames';

import Typography from '../../typography';

import styles from './select.module.scss';
import './select.css';

const Select = React.forwardRef(
  (
    {
      label,
      className: propsClassName,
      hasError,
      errorMessage,
      options,
      onSelectChange,
      ...props
    },
    ref
  ) => {
    const [isListOpen, setIsListOpen] = useState(false);

    const className = cx(styles.base, propsClassName);

    const selectedOption = options.find(
      (option) => option.value === props.value
    );
    const onMenuOpen = () => {
      setIsListOpen((prev) => !prev);
    };
    const onMenuClose = () => {
      setIsListOpen(false);
    };

    const customStyles = {
      placeholder: (provided, state) => ({
        ...provided,
        fontFamily: 'Lato',
        fontSize: '14px',
        lineHeight: '16px',
        margin: '0px',
      }),
      valueContainer: (provided, state) => ({
        ...provided,
        paddingLeft: '16px',
      }),
    };

    return (
      <div className={className}>
        <label htmlFor={props.name} id="select-aria-label">
          {label && (
            <Typography
              variant="body1"
              color={hasError ? 'error-red' : 'black'}
              component="span"
              className={styles.label}
            >
              {label}
            </Typography>
          )}

          <ReactSelect
            styles={customStyles}
            tabIndex={props.tabIndex}
            width="100%"
            className={styles.wrapper}
            value={selectedOption}
            classNamePrefix="select"
            onMenuOpen={onMenuOpen}
            onMenuClose={onMenuClose}
            options={options}
            aria-labelledby="select-aria-label"
            inputId={props.name}
            menuIsOpen={isListOpen}
            name={props.name}
            placeholder={props.placeholder}
            openMenuOnClick
            onChange={(selected) => {
              onSelectChange(selected);
            }}
            data-testid={props['data-testid']}
          />
        </label>
      </div>
    );
  }
);

export default Select;
