import React, { useState } from 'react';
import styles from "./ctl-space.scss";
import { PrimaryButton } from 'office-ui-fabric-react';
import { getAllData_Handle, setData_Handle } from './clt-handle';

const _alertClicked = function () {

}
function CtlSpace(props) {
  // const [count, setCount] = useState(0);
  return (
    <div className={styles.component} style={props.style}>
      <div className={styles.buttonBox}>
        <PrimaryButton className={styles.button} text="get all data" onClick={getAllData_Handle} />
      </div>
      <div className={styles.buttonBox}>
        <input className={styles.button}></input>
      </div>
      <div className={styles.buttonBox}>
        <PrimaryButton className={styles.button} text="get data by id" onClick={_alertClicked} />
      </div>
      <div className={styles.buttonBox}>
        <PrimaryButton className={styles.button} text="delete data by id" onClick={_alertClicked} />
      </div>
      <div className={styles.buttonBox}>
        <PrimaryButton className={styles.button} text="set data" onClick={setData_Handle} />
      </div>
      <div className={styles.buttonBox}>
        <PrimaryButton className={styles.button} text="update data" onClick={_alertClicked} />
      </div>
    </div>
  );
}
export default CtlSpace;
