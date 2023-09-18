import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { MessageProvider } from "./context/MessageContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <MessageProvider>
      <App />
    </MessageProvider>
  </BrowserRouter>
);
