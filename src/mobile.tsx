import { Viewer } from "./pages/Viewer.tsx";
import { QueryClient, QueryClientProvider, React, ReactDOM } from "./core/deps.ts";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Viewer />
    </QueryClientProvider>
  </React.StrictMode>,
);
