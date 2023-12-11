import App from "../shared/App.tsx";
import { QueryClient, QueryClientProvider, React, ReactDOM } from "../shared/deps.ts";
import "../shared/index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
