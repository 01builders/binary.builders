import React from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';

import Landing from './views/landing/landing';

import styles from './binary-builders.module.scss';

const BinaryBuilders = () => {
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

export default BinaryBuilders;
