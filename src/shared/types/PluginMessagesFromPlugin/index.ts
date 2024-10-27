import { FromPluginData } from "./FromPluginData";

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type PluginMessagesFromPlugin = {
  type: "fromPlugin";
  payload: FromPluginData;
};
