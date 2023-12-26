import { BeatLeaderProfile } from "./components/BeatLeaderProfile.tsx";
import App from "./core/App.tsx";
import { QueryClient, QueryClientProvider, React, ReactDOM } from "./core/deps.ts";
import "./core/index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="flex w-screen justify-around items-center">
        <BeatLeaderProfile userId="76561198023909718" />
        <BeatLeaderProfile userId="76561198362923485" />
        <BeatLeaderProfile userId="76561198089111509" />
        <BeatLeaderProfile userId="76561198191796477" />
      </div>
    </QueryClientProvider>
  </React.StrictMode>,
);
