import { useQuery } from "./deps.ts";
import { PlayerProfile } from "../types/BeatLeader.ts";

const url = "https://api.beatleader.net";

export const useBeatLeaderUserInfo = (userId: number | string) => {
  // const client = useQueryClient();
  const query = useQuery<PlayerProfile>({
    queryKey: ["beatleaderuserinfo", userId],
    queryFn: async () =>
      await fetch(
        `${url}/player/${userId}`
      ).then((x) => x.json()),
  });

  return query;
};
