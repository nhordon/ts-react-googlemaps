import React from "react";
import { createGlobalStyle } from "styled-components";
import ReactDOM from "react-dom";
import App from "./App";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;   

  }  
`;

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyles />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
