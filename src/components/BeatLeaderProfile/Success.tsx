import { PropsWithChildren } from "npm:@types/react";
import { FC, React, useMemo } from "../../core/deps.ts";
import { PlayerProfile, ProfileSettings } from "../../types/BeatLeader.ts";
import { getOverlayUrlByName } from "../../utils/overlay.ts";

const FLAG_CDN = "https://cdn.flags.beatleader.net";
const Flag = ({ countryCode }: { countryCode: string }) => (
  <img className="h-5" src={`${FLAG_CDN}/${countryCode.toLowerCase()}.png`} />
);

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
  | "profileSettings"
  | "role"
>;

const ProfileAvatar = (
  { avatar }: Pick<PlayerProfile, "avatar">,
) => (
  <img
    key="avatar"
    src={avatar}
    className={"w-[184px] h-[184px] m-12 rounded-full absolute bg-black"}
  />
);

const ProfileAvatarOverlay = (
  { role, effectName, hue, saturation }:
    & Pick<PlayerProfile, "role">
    & Pick<
      PlayerProfile["profileSettings"],
      "hue" | "effectName" | "saturation"
    >,
) => {
  const roles = useMemo(() => role.split(","), [role]);
  const styleMemo = useMemo(() => ({
    filter: `hue-rotate(${hue ?? "0"}deg) saturate(${saturation ?? "1"})`,
  }), [hue, saturation]);

  const overlay = getOverlayUrlByName(effectName) ?? "";

  if (!effectName) return;

  return (
    <img
      key="avatar-overlay"
      src={overlay}
      style={styleMemo}
      /* 17.5rem - 0.5rem = width has to be 17rem */
      className="w-[17rem] h-[17rem] m-1 rounded-full absolute"
    />
  );
};

const ProfileCover = (
  { profileCover }: Pick<ProfileSettings, "profileCover">,
) => {
  const styleMemo = useMemo(() => ({
    backgroundImage: `url("${profileCover}")`,
    backgroundPosition: "50%",
    backgroundSize: "cover",
  }), [profileCover]);
  if (!profileCover) return null;
  return (
    <div
      key="cover"
      style={styleMemo}
      className="h-full w-full absolute"
    />
  );
};

const ProfileRankingStats = ({
  country,
  countryRank,
  pp,
  rank,
}: Pick<PlayerProfile, "pp" | "rank" | "countryRank" | "country">) => {
  return (
    <>
      <div className="text-2xl text-shadow rounded inline-flex items-center gap-1">
        <Flag countryCode={country} /> {countryRank}
      </div>
      <div className="text-2xl text-shadow rounded mt-2">
        <i className="fas fa-globe-americas" /> {rank}
      </div>
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
      return "#dd80f2";
    case "YouTube":
      return "#ff0000";
    case "Twitter":
      return "#1da1f2";
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
    case "YouTube":
      return <i className="fab fa fa-youtube" />;
    case "Twitter":
      return <i className="fab fa fa-twitter" />;
    case "BeatSaver":
      return (
        <img
          className="h-7 float-left inline hover:animate-spin"
          src="https://beatsaver.com/static/favicon/apple-touch-icon.png"
        />
      );
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
    <a
      target="_blank"
      rel="noopener noreferrer nofollow"
      href={link}
      className="text-xl px-2 py-1 block rounded-xl rounded-r-none mt-2 ml-auto w-max hover:underline hover:cursor-pointer"
      style={memoStyle}
    >
      <ProfileSocialIcon service={service} />&nbsp;
      {service}
    </a>
  );
};

const ProfileSocials = ({ socials }: Pick<PlayerProfile, "socials">) => {
  const sortedSocials = useMemo(
    () =>
      socials.sort((x, y) => {
        const res = y.service.length - x.service.length;
        if (res !== 0) return res;
        // YouTube, Discord and Twitter are the same length
        // But YouTube is visually the longest, then Discord, then Twitter
        if (x.service === "YouTube") return -1;
        if (y.service === "YouTube") return 1;
        if (x.service === "Discord") return -1;
        if (y.service === "Discord") return 1;
        return res;
      }),
    [socials],
  );
  return sortedSocials.map((social) => (
    <ProfileSocial key={social.id} {...social} />
  ));
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
    <div
      className="text-xl px-2 py-1 rounded-xl rounded-l-none mt-2 w-max"
      style={memoStyle}
    >
      {tag}
    </div>
  );
};

const ProfileClans = ({ clans }: Pick<PlayerProfile, "clans">) => {
  const sortedClans = useMemo(
    () => clans.sort((x, y) => y.tag.length - x.tag.length).slice(0, 3),
    [clans],
  );
  return sortedClans.map((clan) => <ProfileClan key={clan.id} {...clan} />);
};

const TopLeft: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="top-0 left-0 z-20 absolute">
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
  name,
  profileSettings,
  role,
}: BeatLeaderProfileSuccessProps) => {
  return (
    // Technical max height is around 500px, using 490px directly (without rems and other units) is far more safe here
    <div className="w-80 h-[490px] bg-black relative">
      <ProfileCover profileCover={profileSettings.profileCover} />
      <div className="h-[17.5rem] w-full mt-[1.25rem] absolute top-0 left-0">
        <TopRight>
          <ProfileSocials socials={socials} />
        </TopRight>
        <TopLeft>
          <ProfileClans clans={clans} />
        </TopLeft>
      </div>
      <div className="w-full h-full p-[0.6125rem] relative">
        <div className="w-full h-full pl-[0.6125rem] pt-[0.6125rem] relative glass">
          <div className="w-[17.5rem] h-[17.5rem] flex relative">
            <ProfileAvatar
              avatar={avatar}
            />
            <ProfileAvatarOverlay
              role={role}
              effectName={profileSettings.effectName}
              hue={profileSettings.hue}
              saturation={profileSettings.saturation}
            />
            <BottomLeft>
              <ProfileRankingStats
                pp={pp}
                country={country}
                countryRank={countryRank}
                rank={rank}
              />
            </BottomLeft>
          </div>
          <div className="mt-4 text-3xl text-shadow overflow-ellipsis line-clamp-1 text-center">
            {name}
          </div>
        </div>
      </div>
    </div>
  );
};
