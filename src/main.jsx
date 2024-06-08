import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext/ThemseContext.jsx";
import { Provider } from "react-redux";
import store from "./store/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <Provider store={store}>
      <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
);
