import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { dracula, CopyBlock } from "react-code-blocks";
import { themes, TopBar, Navbar, Footer, Note, codeblocks, widgetTypes } from "./components";
import { ReactComponent as Logo } from "./assets/logo.svg";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";

function App() {
  const [selectedTheme, changeTheme] = useState(dracula);
  const [selectedName, changeName] = useState("dracula");
  const [lineNumbers, toggleLineNumbers] = useState(true);
  const [widgetType, toggleWidgetType] = useState(widgetTypes.reservation);
  const [apiKey, setApiKey] = useState("");
  const [ids, setIds] = useState("");

  return (
    <div className="container mx-auto p-4">
      <div className="logo">
        <Logo />
      </div>
      <Navbar />
      <TopBar
        widgetType={{
          id: "widgetType",
          label: "Select widget type here",
          value: widgetType,
          onChange: (e) => {
            const type = widgetTypes[e.target.value];
            toggleWidgetType(type);
          },
          options: Object.keys(widgetTypes).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          )),
        }}
        apiKey={{
          id: "apikey",
          label: "Enter apiKey given from umai here",
          placeholder: "Please enter the api key here",
          value: apiKey,
          onChange: (e) => setApiKey(e.target.value),
        }}
        ids={{
          id: "ids",
          label: "Enter button id's here",
          placeholder: "Please enter the ids of button",
          value: ids,
          onChange: (e) => setIds(e.target.value),
        }}
      />
      <Note
        text={
          <div className="bg-gray-100 p-4 rounded-md">
            <h2 className="text-lg font-bold mb-2">Technical details for custom input field</h2>
            <p className="mb-4">
              The <code className="font-mono bg-gray-200 px-1 rounded">buttonIds</code> input should
              be formatted as a comma-separated list of valid CSS selectors.
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>
                <strong>IDs</strong>: Prefixed with{" "}
                <code className="font-mono bg-gray-200 px-1 rounded">#</code> (e.g.,{" "}
                <code className="font-mono bg-gray-200 px-1 rounded">#umai-button</code>)
              </li>
              <li>
                <strong>Classes</strong>: Prefixed with{" "}
                <code className="font-mono bg-gray-200 px-1 rounded">.</code> (e.g.,{" "}
                <code className="font-mono bg-gray-200 px-1 rounded">.button-class</code>)
              </li>
              <li>
                <strong>Attribute Selectors</strong>: Enclosed in brackets (e.g.,{" "}
                <code className="font-mono bg-gray-200 px-1 rounded">{`[data-action="open"]`}</code>
                )
              </li>
              <li>
                <strong>Element Types</strong>: Directly use the tag name (e.g.,{" "}
                <code className="font-mono bg-gray-200 px-1 rounded">button</code>,{" "}
                <code className="font-mono bg-gray-200 px-1 rounded">a</code>)
              </li>
              <li>
                <strong>Complex selectors</strong>: Enter as needed (e.g.,{" "}
                <code className="font-mono bg-gray-200 px-1 rounded">{`div > .button-class`}</code>{" "}
                or{" "}
                <code className="font-mono bg-gray-200 px-1 rounded">{`input[type="button"]`}</code>
                )
              </li>
            </ul>
            <p className="mb-4">
              Ensure that selectors do not contain invalid characters to avoid issues with{" "}
              <code className="font-mono bg-gray-200 px-1 rounded">querySelectorAll</code>.
            </p>
            <p className="mb-4">
              For more information on how to use CSS selectors, refer to the{" "}
              <a
                className="text-blue-600 underline"
                href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll"
                target="_blank"
                rel="noopener noreferrer"
              >
                MDN Web Docs for{" "}
                <code className="font-mono bg-gray-200 px-1 rounded">querySelectorAll</code>
              </a>
              .
            </p>
            <h3 className="text-md font-semibold mb-2">Examples of valid input:</h3>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>
                <code className="font-mono bg-gray-200 px-1 rounded">#submit-btn</code>,{" "}
                <code className="font-mono bg-gray-200 px-1 rounded">.open-widget</code>,{" "}
                <code className="font-mono bg-gray-200 px-1 rounded">{`[data-role="trigger"]`}</code>
              </li>
            </ul>
            <p>
              This input allows the script to attach click listeners to all matching elements on the
              page.
            </p>
          </div>
        }
      />
      <div className="demo">
        <CopyBlock
          language={"javascript"}
          text={codeblocks({ ids, apiKey, widgetType })}
          showLineNumbers={lineNumbers}
          theme={selectedTheme}
          wrapLines={true}
          codeBlock
        />
      </div>
      <Footer
        select={{
          description: "Select theme as it suits you",
          value: selectedName,
          onChange: (e) => {
            const theme = require(`react-code-blocks`)[e.target.value];
            changeTheme(theme);
            return changeName(e.target.value);
          },
          options: Object.keys(themes).map((theme) => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          )),
        }}
        toggle={{
          checked: lineNumbers,
          onChange: (e) => toggleLineNumbers(!lineNumbers),
        }}
      />
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
