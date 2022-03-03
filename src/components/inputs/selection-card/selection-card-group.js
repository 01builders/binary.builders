import React from 'react';
import PropTypes from 'prop-types';

import { SelectionCardContext } from './selection-card.context';

const propTypes = {
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
};

const SelectionCardGroup = ({ value, onChange, children }) => {
  return (
    <SelectionCardContext.Provider value={{ value, onChange }}>
      {children}
    </SelectionCardContext.Provider>
  );
};

SelectionCardGroup.propTypes = propTypes;

export default SelectionCardGroup;
