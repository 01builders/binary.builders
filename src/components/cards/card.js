import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './card.module.scss';

const propTypes = {
  variant: PropTypes.oneOf(['shaded']),
  component: PropTypes.oneOf([
    'div',
    'input',
    'section',
    'article',
    'button',
    'label',
  ]),
  border: PropTypes.oneOf(['solid', 'dashed', 'none']),
  children: PropTypes.node,
};

const CardBase = ({
  variant,
  component = 'div',
  border = 'solid',
  children,
  className: propsClassName,
  ...props
}) => {
  const Element = component;

  const className = classNames(styles.base, propsClassName, {
    [styles.dashed]: border === 'dashed',
    [styles['border-none']]: border === 'none',
    [styles.shaded]: variant === 'shaded',
    [styles.button]: component === 'button',
  });
  return (
    <>
      <Element className={className} {...props}>
        {children}
      </Element>
    </>
  );
};

CardBase.propTypes = propTypes;

export default CardBase;
