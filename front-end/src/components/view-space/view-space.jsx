import React, { useState, useRef, useEffect } from 'react';
import styles from "./view-space.scss";
import { Link } from 'react-router-dom';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';

function ViewSpace(props) {
  const viewCode = useRef();
  useEffect(() => {
    monaco.editor.create(viewCode.current, {
      value: "function hello() {\n\talert('Hello world!');\n}",
      language: "javascript"
    });
  }, [])
  // const [count, setCount] = useState(0);
  return (
    <div ref={viewCode} className={styles.component} style={props.style}>
    </div>
  );
}
export default ViewSpace;
