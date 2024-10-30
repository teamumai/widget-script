import React, { useState } from "react";
import ReactDOM from "react-dom";
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
          <>
            Please enter comma separated id's if you have more than one button for each widget type
            on the webiste. <span className="ml-1"> For example: button1,button2,button3</span>
          </>
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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
