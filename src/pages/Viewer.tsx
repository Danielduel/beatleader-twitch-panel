import { BeatLeaderProfile } from "../components/BeatLeaderProfile.tsx";
import { useConfig } from "../core/config.ts";
import { React } from "../core/deps.ts";

export const Viewer = () => {
  const config = useConfig();

  if (!config) return;

  return <BeatLeaderProfile beatLeaderUserTarget={config.beatLeaderUserTarget} />;
};
