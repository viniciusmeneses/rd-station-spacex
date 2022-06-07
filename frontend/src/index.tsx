import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { ApiProvider } from "./api/ApiProvider";
import { App } from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ApiProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </ApiProvider>
);
