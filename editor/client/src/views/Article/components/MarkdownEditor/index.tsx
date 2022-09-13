import React, { useEffect, useState } from 'react';
// import AceEditor from 'react-ace';
// import 'ace-builds/src-noconflict/mode-markdown';

import styles from './index.module.less';

export default function MarkdownEditor() {
  const [AceEditor, setEditor] = useState<any>();
  useEffect(() => {
    let importeditor = React.lazy(() => {
      let importEditor = import('react-ace');
      import('ace-builds/src-noconflict/mode-markdown');

      return importEditor;
    });
    setEditor(importeditor);
  }, []);

  console.log(AceEditor);
  return (
    <div className={styles['markdown-editor']}>
      {/* <AceEditor mode="markdown" style={{ width: '100%', height: '100%' }} /> */}
      {AceEditor && <AceEditor mode="markdown" style={{ width: '100%', height: '100%' }} />}
    </div>
  );
}
