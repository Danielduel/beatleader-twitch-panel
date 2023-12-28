import { React } from "../../core/deps.ts";

export const ProfileAvatar = () => {
  const avatar = "https://beatleader.xyz/assets/apple-touch-icon-152x152.png";

  return (
    <img 
      key="avatar"
      src={avatar}
      className={"w-[184px] h-[184px] m-12 absolute hue-rotate-60"} />
  );
};
