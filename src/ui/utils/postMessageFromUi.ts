import type { PluginMessagesFromUi } from "../../shared/types/PluginMessagesFromUi";

/**
 * ref: https://www.figma.com/plugin-docs/creating-ui/#sending-a-message-from-the-ui-to-the-plugin-code
 */
export function postMessageFromUi(pluginMessage: PluginMessagesFromUi) {
  parent.postMessage(
    {
      pluginMessage, // values must be sent on a `pluginMessage` property
    },
    "*", // must be '*'
  );
}
