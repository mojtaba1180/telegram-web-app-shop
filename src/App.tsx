/* eslint-disable indent */
import "@style/app.scss";
import "antd/dist/reset.css";

import useTelegramUser from "@hooks/useTelegramUser";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Main from "./layouts/main";
import Router from "./router";

function App() {
  const isTG = useTelegramUser();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
        refetchOnMount: true,
        refetchOnReconnect: true,
        retry: false,
        staleTime: 5 * 60 * 1000
      }
    }
  });

  if (!isTG) return <>open in telegram app </>;
  return (
    <QueryClientProvider client={queryClient}>
      <Main>
        <Router />
      </Main>
    </QueryClientProvider>
  );
}

export default App;
