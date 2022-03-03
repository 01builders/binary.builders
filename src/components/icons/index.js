import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import Typography from '../typography';

import { map, AVAILABLE_ICONS } from './svg';

import backgroundColors from '../../css/background-colors.module.scss';
import colors from '../../css/colors.module.scss';
import styles from './index.module.scss';

const propTypes = {
  i: PropTypes.oneOf(Object.values(AVAILABLE_ICONS)),
  size: PropTypes.number,
  color: PropTypes.oneOf(Object.keys(colors)),
  backgroundColor: PropTypes.oneOf(Object.keys(backgroundColors)),
  children: PropTypes.node,
};

const Icon = ({
  i,
  size = 16,
  color,
  backgroundColor,
  className: propsClassName,
  children,
}) => {
  const isIconSpecified = Object.values(AVAILABLE_ICONS).includes(i);
  const isBackgroundColorSpecified = backgroundColor in backgroundColors;

  const className = classNames(
    styles.base,
    propsClassName,
    colors[color],
    backgroundColors[backgroundColor],
    {
      [styles.icon]: isIconSpecified,
      [styles.text]: !isIconSpecified,
      [styles.filled]: isBackgroundColorSpecified,
    }
  );

  const dimensions = { width: size, height: size };
  const fontStyle = { fontSize: size, lineHeight: `${size}px` };

  return isIconSpecified ? (
    <span className={className} style={{ ...dimensions, ...fontStyle }}>
      {map[i]}
    </span>
  ) : (
    <Typography
      variant="body1"
      component="span"
      className={className}
      style={{
        ...dimensions,
        ...fontStyle,
        fontSize: isBackgroundColorSpecified ? size * 0.55 : size,
      }}
    >
      <strong>{children}</strong>
    </Typography>
  );
};

Icon.propTypes = propTypes;

export { backgroundColors, colors, AVAILABLE_ICONS };
export default Icon;
