import { PreviewTest } from "./PreviewTest.tsx";
import { QueryClient, QueryClientProvider, React, ReactDOM } from "./core/deps.ts";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PreviewTest />
    </QueryClientProvider>
  </React.StrictMode>,
);
