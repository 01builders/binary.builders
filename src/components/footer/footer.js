import React from 'react';

import Typography from '../typography';


import styles from './footer.module.scss';

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <div className={styles.category}>
        <Typography className={styles.title} color="white" href={'https'}>
            Social Media
        </Typography>
        <a href='https://twitter.com/binary_builders' style={{ textDecoration: 'none' }}>
          <Typography className={styles.item} color="white">
              Twitter
          </Typography>
        </a>
      </div>
      <div className={styles.category}>
        <Typography className={styles.title} color="white">
            Ventures
        </Typography>
        <a href='https://v1.cosmos.network/sdk' style={{ textDecoration: 'none' }}>
          <Typography className={styles.item} color="white">
              Cosmos SDK
          </Typography>
        </a>
        <a href='https://numia.xyz/' style={{ textDecoration: 'none' }}>
          <Typography className={styles.item} color="white">
              Numia
          </Typography>
        </a>
        <a href='https://join.builders/' style={{ textDecoration: 'none' }}>
          <Typography className={styles.item} color="white">
              Interchain Builders Program
          </Typography>
        </a>
      </div>
      <div className={styles.category}>
        <Typography className={styles.title} color="white">
            Legal
        </Typography>
        <Typography className={styles.item} color="white">
          &copy;&nbsp;{' '}{new Date().getFullYear()}&nbsp;BINARY BUILDERS
        </Typography>
      </div>
    </div>
  )
}

export default Footer;
