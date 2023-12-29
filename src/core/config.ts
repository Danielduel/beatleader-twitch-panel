import "npm:@types/twitch-ext"
import { z, useState, useEffect } from "./deps.ts";

const configSchema = z.object({
  beatLeaderUserTarget: z.string(),
})

const tryParsingConfig = (s = "") => {
  try {
    return configSchema.parse(JSON.parse(s));
  } catch (err) {
    console.log(s);
    console.error(err);
    return null;
  }
}

export const useConfig = () => {
  const [config, setConfig] = useState<(typeof configSchema)["_type"] | null>(null);

  useEffect(() => {
    // once on start
    setConfig(tryParsingConfig(Twitch.ext.configuration.broadcaster?.content));
    Twitch.ext.configuration.onChanged(() => {
      setConfig(tryParsingConfig(Twitch.ext.configuration.broadcaster?.content));
    });    
  }, [setConfig]);

  return config;
}
