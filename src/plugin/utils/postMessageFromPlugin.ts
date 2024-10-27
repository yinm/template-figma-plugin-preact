import type { PluginMessagesFromPlugin } from "../../shared/types/PluginMessagesFromPlugin";

/**
 * ref: https://www.figma.com/plugin-docs/creating-ui/#sending-a-message-from-the-plugin-code-to-the-ui
 */
export function postMessageFromPlugin(pluginMessage: PluginMessagesFromPlugin) {
  figma.ui.postMessage(pluginMessage);
}
