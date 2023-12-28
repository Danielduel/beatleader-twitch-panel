import { useBeatLeaderUserInfo } from "../core/api.ts";
import { React, FC } from "../core/deps.ts";
import { BeatLeaderProfileError } from "./BeatLeaderProfile/BeatLeaderProfileError.tsx";
import { BeatLeaderProfileLoading } from "./BeatLeaderProfile/BeatLeaderProfileLoading.tsx";
import { BeatLeaderProfileSuccess } from "./BeatLeaderProfile/BeatLeaderProfileSuccess.tsx";

type BeatLeaderProfileProps = {
  userId: string;
};

export const BeatLeaderProfile: FC<BeatLeaderProfileProps> = ({
  userId
}) => {
  const { data, isLoading } = useBeatLeaderUserInfo(userId);

  if (isLoading) return <BeatLeaderProfileLoading />;
  if (!data) return <BeatLeaderProfileError />;

  return <BeatLeaderProfileSuccess {...data} />;
}
