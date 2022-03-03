import React from 'react';
import { select, number, text } from '@storybook/addon-knobs';

import Icon, { backgroundColors, colors, AVAILABLE_ICONS } from '.';

const backgroundColorOptions = Object.keys(backgroundColors);
const colorOptions = Object.keys(colors);
const iconOptions = Object.values(AVAILABLE_ICONS);

export default {
  title: 'Icons',
  component: Icon,
};

export const IconBase = () => {
  const i = select('Icon', ['', ...iconOptions], iconOptions[0]);
  const color = select('Color', colorOptions, colorOptions[0]);
  const backgroundColor = select(
    'Background color',
    ['', ...backgroundColorOptions],
    backgroundColorOptions[0]
  );

  const size = number('Size', 48);

  const children = text('Text', 60);

  return (
    <Icon
      i={i}
      size={parseInt(size, 10)}
      backgroundColor={backgroundColor}
      color={color}
    >
      {children}
    </Icon>
  );
};
