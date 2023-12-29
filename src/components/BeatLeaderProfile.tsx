import { React, FC, useMemo } from "../core/deps.ts";
import { Profile } from "./BeatLeaderProfile/Profile.tsx"

type BeatLeaderProfileProps = {
  beatLeaderUserTarget: string;
};

export const BeatLeaderProfile: FC<BeatLeaderProfileProps> = ({
  beatLeaderUserTarget
}) => {
  const userId = useMemo(() => {
    // https://beatleader.xyz/u/76561198023909718
    // https://beatleader.xyz/u/76561198023909718/beatleader/pp/asc/1
    // 76561198023909718
    // https://beatleader.xyz/u/14332
    // https://beatleader.xyz/u/14332/beatleader/pp/desc/1
    // 14332

    const _0 = beatLeaderUserTarget;
    const _1 = _0.split("https://beatleader.xyz/u/").reverse()[0];
    const _2 = _1.split("/")[0];
    return _2;
  }, [beatLeaderUserTarget])

  return <Profile userId={userId} />
}
