import React from "react";
import "./App.css";
import {
  FileExplorer,
  CodeMirror,
  BrowserPreview,
  SandpackProvider,
} from "react-smooshpack/es/components";
import "react-smooshpack/dist/styles.css";

const files = {
  "/index.js": {
    code: `\
import React from "react";
import { render } from "react-dom";

function App() {
  return (
    <div>
      Working
    </div>
  );
}

render(<App />, document.getElementById("react-app"));`,
  },
  "/public/index.html": {
    code: `\
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>App</title>
</head>
<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="react-app"></div>
</body>
</html>
`,
  },
};

const dependencies = {
  react: "16.13.1",
  "react-dom": "16.13.1",
};

function App() {
  return (
    <div>
      <SandpackProvider
        files={files}
        dependencies={dependencies}
        entry="/index.js"
        // bundlerURL="https://sandpack-0-0-61.codesandbox.io/" Uncomment to make it work
        style={{
          width: "100%",
          maxWidth: 1800,
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
          }}
        >
          <FileExplorer />

          <CodeMirror
            style={{
              flex: 1,
              overflowX: "hidden",
            }}
          />
          <BrowserPreview
            style={{
              flex: 1,
              overflowX: "hidden",
            }}
          />
        </div>
      </SandpackProvider>
    </div>
  );
}

export default App;
