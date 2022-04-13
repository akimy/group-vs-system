import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { Provider } from 'react-redux'
import configureStore from './store'
import Layout from './components/Layout'

function App() {
  return (
    <Provider store={configureStore()}>
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />

          <h1 className={styles.title}>
            TGVS - Tekken Group VS System 
          </h1>
        </header>

        <Layout />
      </div>
    </Provider>
  );
}

export default App;
