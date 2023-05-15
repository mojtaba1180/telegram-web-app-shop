/* eslint-disable indent */
import "@style/app.scss";
import "antd/dist/reset.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Main from "./layouts/main";
import Router from "./router";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Main>
        <Router />
      </Main>
    </QueryClientProvider>
  );
}

export default App;
