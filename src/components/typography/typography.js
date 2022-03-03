import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import colors from '../../css/colors.module.scss';

import styles from './typography.module.scss';

const variantComponentMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  subtitle: 'p',
  subtitle1: 'p',
  subtitle2: 'p',
  breadcrumb: 'span',
  footnote: 'p',
};

const colorKeys = Object.keys(colors);
export { colorKeys as colors };

export const variants = Object.keys(variantComponentMap);

const components = [...Object.values(variantComponentMap), 'div', 'span', 'a'];

const propTypes = {
  variant: PropTypes.oneOf(variants),
  weight: PropTypes.oneOf(['normal', 'bold']),
  component: PropTypes.oneOf(components),
  color: PropTypes.oneOf(Object.keys(colors)),
  gutterBottom: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

const Typography = ({
  variant,
  weight = 'normal',
  component,
  color = 'black',
  gutterBottom = false,
  children,
  ...props
}) => {
  const Element = component || variantComponentMap[variant] || 'span';

  const className = classNames(
    styles.base,
    styles[variant],
    styles[weight],
    colors[color],
    props.className,
    {
      [styles.gutterBottom]: gutterBottom,
    }
  );
  return (
    <Element {...props} className={className}>
      {children}
    </Element>
  );
};

Typography.propTypes = propTypes;

export default Typography;
