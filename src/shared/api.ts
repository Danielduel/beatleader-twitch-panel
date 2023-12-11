import { useQuery, useQueryClient } from "./deps.ts";
import { IPlayer } from "https://raw.githubusercontent.com/Solaris9/beatstats/main/src/types/beatleader.d.ts";

const url = "https://api.beatleader.xyz";

export const useBeatLeaderUserInfo = (userId: number | string) => {
  // const client = useQueryClient();
  const query = useQuery<IPlayer>({
    queryKey: ["beatleaderuserinfo"],
    queryFn: () =>
      fetch(
        `${url}/player/${userId}`,
      ).then((x) => x.json()),
  });

  return query;
};
