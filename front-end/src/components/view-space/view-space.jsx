import React, { useState, useRef, useEffect } from 'react';
import styles from "./view-space.scss";
import { Link } from 'react-router-dom';
import MonacoEditor from 'react-monaco-editor';
import objStringify from 'obj-stringify';
import { connect } from 'react-redux';

function ViewSpace(props) {
  // const [count, setCount] = useState(0);
  const options = {
    selectOnLineNumbers: false,
    minimap: {
      enabled: false
    },
  }
  return (
    <div className={styles.component} style={props.style}>
      data:
      <MonacoEditor
        className={styles.viewStatus}
        language="javascript"
        theme="vs-light"
        value={objStringify(props.dataValue)}
        options={options}
      // onChange={this.onChange}
      // editorDidMount={this.editorDidMount}
      />
    </div>
  );
}
const mapStateToProps = state => {
  if (state) {
    return {
      dataValue: state.dataValue
    };
  }
  else {
    return {};
  }
};
export default connect(mapStateToProps)(ViewSpace);
