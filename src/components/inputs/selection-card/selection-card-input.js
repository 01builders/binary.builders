import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Card from '../../cards';

import { SelectionCardContext } from './selection-card.context';

import styles from './selection-card.module.scss';

const propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

const SelectionCard = ({ placeholder, ...props }) => {
  const className = cx(styles.card, styles['custom-input'], props.className);

  return (
    <SelectionCardContext.Consumer>
      {({ value, onChange }) => (
        <Card
          {...props}
          className={className}
          component="input"
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
    </SelectionCardContext.Consumer>
  );
};

SelectionCard.propTypes = propTypes;

export default SelectionCard;
