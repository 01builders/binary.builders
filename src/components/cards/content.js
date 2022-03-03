import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './card.module.scss';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const CardContent = ({ className: propsClassName, children, ...props }) => {
  const className = classNames(styles.content, propsClassName);

  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

CardContent.propTypes = propTypes;

export default CardContent;
