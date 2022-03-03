import React, { useState } from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import {
  Input as InputBase,
  Textarea as TextareaBase,
  Frank as FrankBase,
  SelectionCard as SelectionCardBase,
  SelectionCardGroup,
  SelectionCardInput,
  Checkbox as CheckboxBase,
} from '.';

export default {
  title: 'Inputs',
};

export const Input = () => {
  const initialLabel = text('Label Text', 'Input Label');
  const initialValue = text('Initial value', 'Lorem Ipsum');
  const errorMessage = text(
    'Error Message',
    'Input must contain a valid thing!'
  );
  const hasError = boolean('Error state', false);

  const [value, setValue] = useState(initialValue);

  return (
    <InputBase
      label={initialLabel}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      hasError={hasError}
      errorMessage={errorMessage}
      placeholder="Enter text here..."
    />
  );
};

export const Textarea = () => {
  const initialLabel = text('Label Text', 'Textarea Label');
  const initialValue = text('Initial value', 'Lorem Ipsum');
  const errorMessage = text(
    'Error Message',
    'Input must contain a valid thing!'
  );
  const hasError = boolean('Error state', false);

  const [value, setValue] = useState(initialValue);

  return (
    <TextareaBase
      label={initialLabel}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      hasError={hasError}
      errorMessage={errorMessage}
      placeholder="Enter text here..."
    />
  );
};

export const Frank = () => {
  const initialValue = text('Initial value', 'Lorem Ipsum');

  const [value, setValue] = useState(initialValue);

  return (
    <FrankBase
      placeholder="Frank ..."
      value={value}
      onChange={(nextValue) => {
        setValue(nextValue);
        action('onChange')(nextValue);
      }}
    />
  );
};

export const Checkbox = () => {
  const label = text(
    'Label text',
    'Notify me with tips, tools, templates and updates.'
  );
  const [value, setValue] = useState(true);

  return (
    <CheckboxBase
      label={label}
      name="checkbox"
      checked={value}
      onClick={() => setValue(!value)}
    />
  );
};

export const SelectionCard = () => {
  const options = [
    { label: 'Option 1', value: 'option_1' },
    { label: 'Option 2', value: 'option_2' },
    { label: 'Option 3', value: 'option_3' },
  ];

  const [value, setValue] = useState(options[0].value);

  const handleChange = (event) => {
    setValue(event.target.value);
    action('onChange')(event.target.value);
  };

  const isCustom = !options.find((option) => option.value === value);

  return (
    <SelectionCardGroup value={value} onChange={handleChange}>
      {options.map((option, idx) => (
        <SelectionCardBase
          // Default option
          key={idx}
          value={option.value}
          label={option.label}
        />
      ))}

      <SelectionCardBase
        // Custom option
        value={isCustom ? value : ''}
        label="Custom value"
      />

      {isCustom && (
        <SelectionCardInput
          // Custom option input
          placeholder="Write your own question"
        />
      )}
    </SelectionCardGroup>
  );
};
