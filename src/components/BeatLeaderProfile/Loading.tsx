import { PropsWithChildren } from "npm:@types/react";
import { FC, React, cn } from "../../core/deps.ts";

const ProfileAvatar = () => {
  const avatar = "https://beatleader.xyz/assets/apple-touch-icon-152x152.png"

  return (
    <img
      key="avatar"
      src={avatar}
      className={"w-[184px] h-[184px] m-12 absolute opacity-50 animate-bounce grayscale-[1]"}
    />
  );
};

const ProfileCover = () => {
  return (
    <div
      key="cover"
      className="h-full w-full absolute cover-loading bg-[#3a0023]"
    />
  );
};

const ProfileRankingStatsLoading = () => {
  return (
    <>
      <div className="text-2xl rounded bg-slate-500 w-16 opacity-90 grayscale-[1]">&nbsp;</div>
      <div className="text-2xl rounded mt-2 bg-slate-500 w-20 opacity-80 grayscale-[1]">&nbsp;</div>
      <div className="text-3xl rounded mt-2 bg-slate-500 w-32 opacity-70 grayscale-[1]">&nbsp;</div>
    </>
  );
};

const ProfileSocialLoading = ({ i }: { i: number }) => {
  return (
    <div
      className={cn(
        {
          "w-24 opacity-90 animate-pulse": i === 0,
          "w-20 opacity-80 animate-pulse": i === 1,
          "w-16 opacity-70 animate-pulse": i === 2,
        },
        "h-7 box-content grayscale-[1] px-2 py-1 block rounded-xl rounded-r-none mt-2 ml-auto bg-slate-500"
      )}
    />
  );
};

const ProfileSocialsLoading = () => {
  return <>
    <ProfileSocialLoading key="social-1" i={0} />
    <ProfileSocialLoading key="social-2" i={1} />
    <ProfileSocialLoading key="social-3" i={2} />
  </>
};

const ProfileClanLoading = ({ i }: { i: number }) => {
  return (
    <div
      className={cn(
        {
          "opacity-90 animate-pulse": i === 0,
          "opacity-80 animate-pulse": i === 1,
          "opacity-70 w-10 animate-pulse": i === 2,
        },
        "w-12 h-7 box-content grayscale-[1] px-2 py-1 block rounded-xl rounded-l-none mt-2 mr-auto bg-slate-500"
      )}
    />
  );
};

const ProfileClansLoading = () => {
  return <>
    <ProfileClanLoading key="clan-1" i={0} />
    <ProfileClanLoading key="clan-2" i={1} />
    <ProfileClanLoading key="clan-3" i={2} />
  </>
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

export const BeatLeaderProfileLoading = () => {
  return (
    // Technical max height is around 500px, using 490px directly (without rems and other units) is far more safe here
    <div className="w-80 h-[490px] bg-gray-500 relative">
      <ProfileCover />
      <div className="h-[17.5rem] w-full mt-[1.25rem] absolute top-0 left-0">
        <TopRight>
          <ProfileSocialsLoading />
        </TopRight>
        <TopLeft>
          <ProfileClansLoading />
        </TopLeft>
      </div>
      <div className="w-full h-full p-[0.6125rem] relative">
        <div className="w-full h-full pl-[0.6125rem] pt-[0.6125rem] relative glass">
          <div className="w-[17.5rem] h-[17.5rem] flex relative">
            <ProfileAvatar />
            <BottomLeft>
              <ProfileRankingStatsLoading />
            </BottomLeft>
          </div>
          <div className="w-64 bg-slate-500 rounded grayscale-[1] mt-4 text-3xl text-shadow overflow-ellipsis line-clamp-1">
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  );
};
