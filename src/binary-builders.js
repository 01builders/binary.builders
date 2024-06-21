import React from 'react';
import {HashRouter as Router, Route, Routes,} from "react-router-dom";
import Header from './components/header/header';
import Footer from './components/footer/footer';

import Landing from './views/landing/landing';
import ContactForm from './components/ContactForm';

import styles from './binary-builders.module.scss';

const BinaryBuilders = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Header />
        <Routes>
          <Route path='*' element={<Landing/>}/>
          <Route path='/contact' element={<ContactForm className={styles.form}/>}/>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default BinaryBuilders;
