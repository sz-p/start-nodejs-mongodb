import React, { useState } from 'react';
import styles from "./status-space.scss";
import { Link } from 'react-router-dom';

function StatusSpace(props) {
  // const [count, setCount] = useState(0);
  return (
    <div className={styles.component} style={props.style}>
      <p>about</p>
      <Link to={'/'}>返回</Link>
    </div>
  );
}
export default StatusSpace;
