import { PropsWithChildren } from "npm:@types/react";
import { FC, React, useMemo } from "../../core/deps.ts";
import { PlayerProfile } from "../../types/BeatLeader.ts";

function getFlagEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

function isLightColor(colorHex6: string) {
  const s = colorHex6.split("#")[1];
  const r = s.substring(0, 2);
  const g = s.substring(2, 4);
  const b = s.substring(4, 6);

  try {
    const rv = parseInt(r, 16);
    const gv = parseInt(g, 16);
    const bv = parseInt(b, 16);

    return (rv + gv + bv) > (3 * 0xCC);
  } catch (err) {
    console.log(err);
    return false;
  }
}

type BeatLeaderProfileSuccessProps = Pick<
  PlayerProfile,
  | "banned"
  | "inactive"
  | "banDescription"
  | "name"
  | "avatar"
  | "pp"
  | "rank"
  | "countryRank"
  | "country"
  | "clans"
  | "socials"
>;

const ProfileAvatar = ({ avatar }: Pick<PlayerProfile, "avatar">) => {
  return (
    <>
      <img
        key="avatar-big"
        src={avatar}
        className="w-full h-full rounded-full absolute bg-black blur"
      />
      {/* 184px x 184px are steam avatar dimensions */}
      <img
        key="avatar-small"
        src={avatar}
        className="w-[184px] h-[184px] m-12 rounded-full absolute bg-black"
      />
    </>
  );
};

const ProfileSkillTriangle = () => {
  return <div className="bg-black w-1/2 h-1/2"></div>;
};

const ProfileRankingStats = ({
  country,
  countryRank,
  pp,
  rank,
}: Pick<PlayerProfile, "pp" | "rank" | "countryRank" | "country">) => {
  return (
    <>
      <div className="text-2xl text-shadow rounded">
        {getFlagEmoji(country)} {countryRank}
      </div>
      <div className="text-2xl text-shadow rounded mt-2"><i className="fas fa-globe-americas" /> {rank}</div>
      <div className="text-3xl text-shadow rounded mt-2">{~~pp}pp</div>
    </>
  );
};

const serviceToColor = (service: string) => {
  switch (service) {
    case "Twitch":
      return "#6441a5";
    case "Discord":
      return "#7289da";
    case "BeatSaver":
      return "#ffffff";
    default:
      return "#cccccc";
  }
};

const ProfileSocialIcon = ({ service }: { service: string }) => {
  switch (service) {
    case "Discord":
      return <i className="fab fa fa-discord" />;
    case "Twitch":
      return <i className="fab fa fa-twitch" />;
    default:
      return null;
  }
};

const ProfileSocial = (
  { id, link, playerId, service, user, userId }: Pick<
    PlayerProfile,
    "socials"
  >["socials"][number],
) => {
  const memoStyle = useMemo(() => {
    const color = serviceToColor(service);
    const isLight = isLightColor(color);
    return {
      backgroundColor: color,
      color: isLight ? "#000" : "#FFF",
      textShadow: isLight ? "1px 1px #FFF" : "1px 1px black",
    };
  }, [service]);
  return (
    <div
      className="text-lg px-2 py-1 ml-auto rounded-xl mb-1 text-right w-max hover:underline hover:cursor-pointer"
      style={memoStyle}
    >
      <ProfileSocialIcon service={service} />&nbsp;
      {service}
    </div>
  );
};

const ProfileSocials = ({ socials }: Pick<PlayerProfile, "socials">) => {
  const sortedSocials = useMemo(
    () => socials.sort((x, y) => y.service.length - x.service.length),
    [socials],
  );
  return sortedSocials.map((social) => <ProfileSocial key={social.id} {...social} />);
};

const ProfileClan = (
  { color, id, tag }: Pick<PlayerProfile, "clans">["clans"][number],
) => {
  const memoStyle = useMemo(() => {
    const isLight = isLightColor(color);
    return {
      backgroundColor: color,
      color: isLight ? "#000" : "#FFF",
      textShadow: isLight ? "2px 2px #FFF" : "2px 2px black",
    };
  }, [color]);
  return (
    <div className="text-xl px-2 py-1 rounded-xl mt-2" style={memoStyle}>
      {tag}
    </div>
  );
};

const ProfileClans = ({ clans }: Pick<PlayerProfile, "clans">) => {
  return clans.map((clan) => <ProfileClan key={clan.id} {...clan} />);
};

const TopLeft: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="top-0 left-0 z-10 absolute w-full h-full">
      {children}
    </div>
  );
};

const TopRight: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="top-0 right-0 z-20 absolute">
      {children}
    </div>
  );
};

const BottomLeft: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bottom-0 left-0 z-20 absolute">
      {children}
    </div>
  );
};

const BottomRight: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bottom-0 right-0 z-20 absolute">
      {children}
    </div>
  );
};

export const BeatLeaderProfileSuccess = ({
  avatar,
  pp,
  country,
  countryRank,
  rank,
  clans,
  socials,
  name
}: BeatLeaderProfileSuccessProps) => {
  return (
    // Technical max height is around 500px, using 490px directly (without rems and other units) is far more safe here
    <div className="w-80 h-[490px] bg-gray-500 p-[1.25rem]">
      <div className="w-[17.5rem] h-[17.5rem] flex relative">
        <ProfileAvatar avatar={avatar} />
        <TopLeft>
          <ProfileSkillTriangle />
        </TopLeft>
        <BottomLeft>
          <ProfileRankingStats
            pp={pp}
            country={country}
            countryRank={countryRank}
            rank={rank}
          />
        </BottomLeft>
        <TopRight>
          <ProfileSocials socials={socials} />
        </TopRight>
        <BottomRight>
          <ProfileClans clans={clans} />
        </BottomRight>
      </div>
      <div className="mt-4 text-3xl text-shadow overflow-ellipsis line-clamp-1 text-center">{name}</div>
      <div className="w-full h-24 bg-black mt-4"></div>
    </div>
  );
};
