import React from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';

import Landing from './views/landing/landing';

import styles from './binary-holdings.module.scss';

const BinaryHoldings = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Header />
        <Landing />
        <Footer />
      </div>
    </div>
  );
}

export default BinaryHoldings;
