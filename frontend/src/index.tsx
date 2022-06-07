import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { ApiProvider } from "./api/ApiProvider";
import { App } from "./App";
import { OptimizeProvider } from "./lib/google-optimize";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ApiProvider>
    <ChakraProvider>
      <OptimizeProvider>
        <App />
      </OptimizeProvider>
    </ChakraProvider>
  </ApiProvider>
);
