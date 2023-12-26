import { React, useState } from "./core/deps.ts";
import { BeatLeaderProfile } from "./components/BeatLeaderProfile.tsx";

export const PreviewTest = () => {
  const [userId, setUserId] = useState("76561198101647485");
  return (
    <div className="m-3">
      <h1>Tester:</h1>
      <span className="text-xl ml-8">BeatLeader user id:
      <input
        className="p-2 rounded bg-white ml-2 text-black"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      </span>
      <div className="flex w-screen place-content-center m-3">
      <BeatLeaderProfile userId={userId} />
      </div>
      <h1>Test data:</h1>
      <div className="flex flex-wrap gap-5 mt-10 w-screen justify-around items-center">
        <BeatLeaderProfile userId="76561198023909718" />
        <BeatLeaderProfile userId="76561198362923485" />
        <BeatLeaderProfile userId="76561198193496165" />
        <BeatLeaderProfile userId="76561198191796477" />
        <BeatLeaderProfile userId="76561198375641167" />

        <BeatLeaderProfile userId="76561198181965657" />
        <BeatLeaderProfile userId="14332" />
        <BeatLeaderProfile userId="76561198119652703" />
        <BeatLeaderProfile userId="76561199135800550" />
        <BeatLeaderProfile userId="76561198813741320" />
        <BeatLeaderProfile userId="76561198180759353" />
        <BeatLeaderProfile userId="76561198855509821" />
        <BeatLeaderProfile userId="76561198323208342" />
        <BeatLeaderProfile userId="76561199221713405" />
        <BeatLeaderProfile userId="76561198021760180" />

        <BeatLeaderProfile userId="76561199002201939" />
        <BeatLeaderProfile userId="76561198100136966" />
        <BeatLeaderProfile userId="76561198015962837" />
        <BeatLeaderProfile userId="76561198253678050" />
      </div>
    </div>
  );
};
