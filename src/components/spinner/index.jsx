import React from 'react';

import styles from '../../styles/Spinner.module.css';

const SpinnerComponent = (props) => (
    <div className={styles.spinnerDiv}>
        <div className={`spinner-border orange-color ${styles.spinnerSize} ${styles.spinnerColor}`} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);

export default SpinnerComponent;