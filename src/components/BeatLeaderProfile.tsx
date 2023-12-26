import { useBeatLeaderUserInfo } from "../core/api.ts";
import { React, FC } from "../core/deps.ts";
import { BeatLeaderProfileSuccess } from "./BeatLeaderProfile/BeatLeaderProfileSuccess.tsx";

type BeatLeaderProfileProps = {
  userId: string;
};

export const BeatLeaderProfile: FC<BeatLeaderProfileProps> = ({
  userId
}) => {
  const { data, isLoading } = useBeatLeaderUserInfo(userId);

  if (isLoading) return "loading";
  if (!data) return "error";

  return <BeatLeaderProfileSuccess {...data} />;
}
