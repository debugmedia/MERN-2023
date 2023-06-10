import { Fragment, useState } from 'react';
import styles from './App.module.scss';
import Duplicate from './duplicate';

function App() {
    return (
        <Fragment>
            <div className={styles['parent-1']}>
                <h1>Vite + React</h1>
            </div>
            <div className={styles.parent2}>
                <h1>Some other text</h1>
            </div>

            <Duplicate />
        </Fragment>
    );
}

export default App;
