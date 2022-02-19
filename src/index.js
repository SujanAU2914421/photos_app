import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MainContainerProvider } from "./contexts/mainContext";

ReactDOM.render(
	<React.StrictMode>
		<MainContainerProvider>
			<App />
		</MainContainerProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
