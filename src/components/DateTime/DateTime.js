import React from 'react';
import styles from './styles.module.css'

const timestamp = Date.now();

const DateTime = () => {

    return (
        <div className={styles.allDate}>
            {new Intl.DateTimeFormat('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(timestamp)}
        </div>
    );
}

export default DateTime;
