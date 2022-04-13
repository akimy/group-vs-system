import React from 'react';
import { useSelector } from 'react-redux';

import styles from './styles.module.css';

const Log = () => {
    const logs = useSelector((state) => state.logs);

    return (
        <div className={styles.root}>
            <h2 className={styles.title}>LOG</h2>

            {logs.map(log => (
                <div className={styles.log} key={log.id}>
                    <span className={styles.time}>{log.time}</span> 
                    {log.message}
                </div>
            ))}
        </div>
    );
};

export default Log;