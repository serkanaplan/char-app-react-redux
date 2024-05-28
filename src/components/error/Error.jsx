import React from 'react';
import styles from './Error.module.css';

const Error = ({ message }) => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorBox}>
        <h1 className={styles.errorTitle}>Oops!</h1>
        <p className={styles.errorMessage}>{message}</p>
      </div>
    </div>
  );
};

export default Error;
