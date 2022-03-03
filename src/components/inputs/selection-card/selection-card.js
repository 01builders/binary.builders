import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Card from '../../cards';
import Typography from '../../typography';

import { SelectionCardContext } from './selection-card.context';

import styles from './selection-card.module.scss';

const propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.any,
};

const SelectionCard = ({ label, value: inputValue, ...props }) => {
  const className = cx(styles.card, props.className);

  return (
    <SelectionCardContext.Consumer>
      {({ value, onChange }) => (
        <Card className={className} component="label">
          <Typography variant="body1" className={styles.label}>
            {label}
          </Typography>
          <input
            {...props}
            type="radio"
            className={styles.radio}
            value={inputValue}
            checked={inputValue === value}
            onChange={onChange}
          />
          <span className={styles['radio-displayed']} />
        </Card>
      )}
    </SelectionCardContext.Consumer>
  );
};

SelectionCard.propTypes = propTypes;

export default SelectionCard;
