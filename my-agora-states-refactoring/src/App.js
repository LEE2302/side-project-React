import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import { agoraStatesDiscussions } from "./data/data";
import Content from "./components/Content";
import FormBox from "./form/FormBox";

const dumys = agoraStatesDiscussions;
function App() {
  const [form, setForm] = useState(dumys);

  const appFormState = (data) => {
    setForm([data, ...form]);
  };

  return (
    <>
      <FormBox appFormState={appFormState} />
      <Content data={form} />
    </>
  );
}

export default App;
