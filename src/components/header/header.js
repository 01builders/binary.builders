import React from 'react';

import Typography from '../typography';

import { ReactComponent as BinaryLogo } from '../../assets/header-logo.svg';

import styles from './header.module.scss';

const Header = (props) => {
  return (
    <div className={styles.header}>
      <Typography className={styles.logo} component="a" href="/">
        <BinaryLogo className={styles['header-logo']}/>
        <Typography className={styles['header-title']} color="white" component="span">B1NARY BUILDERS</Typography>
      </Typography>
      <Typography className={styles['display-mobile']} component="div">
        <a className={styles.inside} target='_blank' rel="noreferrer" href='mailto:contact@binary.builders' style={{ textDecoration: 'none' }}>
          <Typography color="white" component="span">
            REACH OUT
          </Typography>
        </a>
      </Typography>
    </div>
  )
}

export default Header;
