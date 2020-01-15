import React, { useState } from 'react';
import styles from "./index.scss";
import { Link } from 'react-router-dom';
import CtlSpace from '../../components/ctl-space/ctl-space';
import StatusSpace from '../../components/status-space/status-space';
import ViewSpace from '../../components/view-space/view-space';

function IndexPage() {
  return (
    <div className={styles.page}>
      <CtlSpace />
      <ViewSpace />
      <StatusSpace />
    </div>
  );
}
export default IndexPage;
