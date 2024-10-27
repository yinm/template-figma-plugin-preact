import { PluginMessagesFromUi } from "../shared/types/PluginMessagesFromUi";
import { postMessageFromPlugin } from "./utils/postMessageFromPlugin";

figma.showUI(__html__);

figma.ui.onmessage = (message: PluginMessagesFromUi) => {
  switch (message.type) {
    case "initiate": {
      console.log("initiate process");
      break;
    }

    case "selectNode": {
      postMessageFromPlugin({
        type: "fromPlugin",
        payload: { id: "123", content: "content test" },
      });
      break;
    }

    default: {
      throw new Error(`unexpected ${message satisfies never}`);
    }
  }
};
