import React from 'react';

import Typography from '../typography';


import styles from './footer.module.scss';

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <Typography className={styles.copyright} color="white">
        &copy;&nbsp;{' '}{new Date().getFullYear()}&nbsp;BINARY HOLDINGS
      </Typography>
    </div>
  )
}

export default Footer;
