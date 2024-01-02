import { React, useEffect, useForm, useState, useMemo } from "../core/deps.ts";
import { BeatLeaderProfile } from "./BeatLeaderProfile.tsx";

type ConfigValues = Partial<{
  beatLeaderUserTarget: string;
}>;

export const Configuration = () => {
  const [isSaving, setIsSaving] = useState(false);
  const form = useForm<ConfigValues>({
    defaultValues: {
      beatLeaderUserTarget: "",
    },
    mode: "onChange",
  });

  const values = useMemo(() => {
    return form.watch()
  }, [JSON.stringify(form.watch())]);

  useEffect(() => {
    if (!values.beatLeaderUserTarget) return;

    // autosave on every change
    setIsSaving(true);
    Twitch.ext.configuration.set(
      "broadcaster",
      "1",
      JSON.stringify(values),
    );

    // This will happen superquickly, I want the user to feel safe by "Saving..." text
    setTimeout(() => { setIsSaving(false); }, 1000);
  }, [values, setIsSaving]);

  return (
    <div className="p-5 mb-2 bg-[#333] w-full text-white">
      <div className="border-l-2 pl-3 py-2">
        <div className="text-xs">
          Required
        </div>
        <div className="mb-2">
          Your BeatLeader profile URL
        </div>
        <input
          className="block bg-white text-black p-2 w-96 rounded"
          placeholder="https://beatleader.net/u/012345678912"
          {...form.register("beatLeaderUserTarget")}
        />
        <a
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="https://beatleader.net/"
          className="mt-2 underline hover:cursor-pointer"
        >
          Open BeatLeader
        </a>
        {isSaving && (
          <div className="mt-2 text-gray-500">
            Saving
          </div>
        )}
        {!isSaving && values.beatLeaderUserTarget && (
          <div className="mt-2">
            Changes are automatically saved, if you can see your profile on the preview - you can safely close this window
          </div>
        )}
      </div>
      {values.beatLeaderUserTarget && (
        <div className="pl-3 py-2 mt-5">
          <div className="mb-2">
            Preview
          </div>
          <BeatLeaderProfile
            beatLeaderUserTarget={values.beatLeaderUserTarget}
          />
        </div>
      )}
    </div>
  );
};
