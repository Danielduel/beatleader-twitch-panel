import { useBeatLeaderUserInfo } from "../../core/api.ts";
import { React, FC } from "../../core/deps.ts";
import { BeatLeaderProfileError } from "./Error.tsx";
import { BeatLeaderProfileLoading } from "./Loading.tsx";
import { BeatLeaderProfileSuccess } from "./Success.tsx";

type ProfileProps = {
  userId: string;
};

export const Profile: FC<ProfileProps> = ({
  userId
}) => {
  const { data, isLoading } = useBeatLeaderUserInfo(userId);

  if (isLoading) return <BeatLeaderProfileLoading />;
  if (!data) return <BeatLeaderProfileError />;

  return <BeatLeaderProfileSuccess {...data} />;
}
