import { React } from "./core/deps.ts";
import { BeatLeaderProfile } from "./components/BeatLeaderProfile.tsx";
import { Profile } from "./components/BeatLeaderProfile/Profile.tsx";
import { BeatLeaderProfileLoading } from "./components/BeatLeaderProfile/Loading.tsx";
import { BeatLeaderProfileError } from "./components/BeatLeaderProfile/Error.tsx";
import { Configuration } from "./components/Configuration.tsx";

export const PreviewTest = () => {
  return (
    <div className="m-3">
      <h1>Config page:</h1>
      <div className="flex w-screen place-content-center m-3">
        <Configuration />
      </div>
      <h1>Loading:</h1>
      <div className="flex flex-wrap gap-5 mt-10 w-screen justify-around items-center">
        <BeatLeaderProfileLoading />
      </div>
      <h1>Error:</h1>
      <div className="flex flex-wrap gap-5 mt-10 w-screen justify-around items-center">
        <BeatLeaderProfileError />
      </div>
      <h1>Test data from user input:</h1>
      <div className="flex flex-wrap gap-5 mt-10 w-screen justify-around items-center">
        <BeatLeaderProfile beatLeaderUserTarget="https://beatleader.xyz/u/76561198023909718" />
        <BeatLeaderProfile beatLeaderUserTarget="https://beatleader.xyz/u/76561198023909718/beatleader/pp/asc/1" />
        <BeatLeaderProfile beatLeaderUserTarget="76561198023909718" />
        <BeatLeaderProfile beatLeaderUserTarget="https://beatleader.xyz/u/14332" />
        <BeatLeaderProfile beatLeaderUserTarget="https://beatleader.xyz/u/14332/beatleader/pp/desc/1" />
        <BeatLeaderProfile beatLeaderUserTarget="14332" />
      </div>
      <h1>Test data from user input that should fail:</h1>
      <div className="flex flex-wrap gap-5 mt-10 w-screen justify-around items-center">
        <BeatLeaderProfile beatLeaderUserTarget="https://beatleader.xyz" />
        <BeatLeaderProfile beatLeaderUserTarget="https://beatleader.xyz/u/" />
        <BeatLeaderProfile beatLeaderUserTarget="ht561198023909718" />
        <BeatLeaderProfile beatLeaderUserTarget="https://b09718/beatleader/pp/asc/1" />
        <BeatLeaderProfile beatLeaderUserTarget="asfsafsa" />
        <BeatLeaderProfile beatLeaderUserTarget="" />
      </div>
      <h1>Test data:</h1>
      <div className="flex flex-wrap gap-5 mt-10 w-screen justify-around items-center">
        <Profile userId="76561198059961776" />
        <Profile userId="76561198023909718" />
        <Profile userId="76561198362923485" />
        <Profile userId="76561198087710981" />
        <Profile userId="76561198193496165" />
        <Profile userId="76561198191796477" />
        <Profile userId="76561198375641167" />

        <Profile userId="76561198181965657" />
        <Profile userId="14332" />
        <Profile userId="76561198119652703" />
        <Profile userId="76561199135800550" />
        <Profile userId="76561198813741320" />
        <Profile userId="76561198180759353" />
        <Profile userId="76561198855509821" />
        <Profile userId="76561198323208342" />
        <Profile userId="76561199221713405" />
        <Profile userId="76561198021760180" />

        <Profile userId="76561199002201939" />
        <Profile userId="76561198100136966" />
        <Profile userId="76561198015962837" />
        <Profile userId="76561198253678050" />
      </div>
    </div>
  );
};
