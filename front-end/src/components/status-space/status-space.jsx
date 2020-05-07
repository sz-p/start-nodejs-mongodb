import React, { useState, useRef, useEffect } from 'react';
import styles from "./status-space.scss";
import MonacoEditor from 'react-monaco-editor';
import { connect } from 'react-redux';
import objStringify from 'obj-stringify';
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';

function StatusSpace(props) {
  const options = {
    lineNumbers: "off",
    minimap: {
      enabled: false
    }
  }
  return (
    <div className={styles.component} style={props.style}>
      status:
      <MonacoEditor
        className={styles.statusView}
        language="javascript"
        theme="vs-light"
        value={objStringify(props.statusValue.status)}
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
      statusValue: state.statusValue
    };
  }
  else {
    return {};
  }
};
export default connect(mapStateToProps)(StatusSpace);
