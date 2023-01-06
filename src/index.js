import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Styles/GlobalStyle";
import { MainTheme } from "./Styles/Themes/MainTheme";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-datepicker/dist/react-datepicker.css";
import App from "./App";
import Fonts from "./Styles/Fonts/Fonts";

ReactDOM.hydrate(<React.StrictMode>
    <GlobalStyle />
    <Fonts />
    <ThemeProvider theme={MainTheme}>
        <HashRouter>
            <App />
        </HashRouter>
    </ThemeProvider>
</React.StrictMode>, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();