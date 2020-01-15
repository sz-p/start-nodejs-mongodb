import React, { useState } from 'react';
import styles from "./ctl-space.scss";
import { Link } from 'react-router-dom';

function CtlSpace(props) {
  // const [count, setCount] = useState(0);
  return (
    <div className={styles.component} style={props.style}>
      <p>about</p>
      <Link to={'/'}>返回</Link>
    </div>
  );
}
export default CtlSpace;
