import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Typography from '../typography';

import styles from './index.module.scss';

const variants = [
  'primary',
  'secondary',
  'tertiary',
  'underline',
  'icon',
  'icon-button',
];

const components = ['button', 'a', 'div'];

const propTypes = {
  variant: PropTypes.oneOf(variants),
  withBorder: PropTypes.bool,
  color: PropTypes.oneOf(['light-blue', 'dark-blue']),
  component: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.oneOf(components),
  ]),
  children: PropTypes.node.isRequired,
};

const Button = React.forwardRef(
  (
    {
      className: propsClassName,
      variant = 'primary',
      withBorder = false,
      color = variant === 'primary' ? 'light-blue' : 'dark-blue',
      component = 'button',
      children,
      ...props
    },
    ref
  ) => {
    const addedProps = {};
    const Element = component;

    if (component === 'div') {
      addedProps.tabIndex = 0;
      addedProps.role = 'button';
      addedProps.onKeyPress = props.onClick;
    }

    const className = classNames(styles.base, propsClassName, styles[variant], {
      [styles.border]: withBorder,
      [styles[color]]: color !== '',
    });

    return (
      <Element
        // Override default button type as `button`.
        type={component === 'button' ? 'button' : undefined}
        className={className}
        ref={ref}
        data-testid={props['data-testid']}
        {...props}
        {...addedProps}
      >
        {variant === 'icon' || variant === 'icon-button' ? (
          <>{children}</>
        ) : (
          <Typography
            variant="body1"
            component="span"
            className={styles.buttonText}
          >
            {children}
          </Typography>
        )}
      </Element>
    );
  }
);

Button.propTypes = propTypes;

export { variants };
export default Button;
