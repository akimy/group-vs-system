import React from 'react';
import styles from './App.module.css';
import { Provider } from 'react-redux'
import configureStore from './store'
import Layout from './components/Layout'

function App() {
  return (
    <Provider store={configureStore()}>
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <h1 className={styles.title}>
            Fighting group games
          </h1>
        </header>

        <Layout />
      </div>
    </Provider>
  );
}

export default App;
