import App from "../core/App.tsx";
import { QueryClient, QueryClientProvider, React, ReactDOM } from "../core/deps.ts";
import "../core/index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
