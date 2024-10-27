export type PluginMessagesFromUi =
  | {
      type: "initiate";
    }
  | { type: "selectNode"; payload: { id: string } };
