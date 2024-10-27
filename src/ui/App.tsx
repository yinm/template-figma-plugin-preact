import { useEffect, useState } from "preact/hooks";
import { PluginMessagesFromPlugin } from "../shared/types/PluginMessagesFromPlugin";
import { postMessageFromUi } from "./utils/postMessageFromUi";

export function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const abortController = new AbortController();

    window.addEventListener(
      "message",
      ({
        data: { pluginMessage },
      }: MessageEvent<{ pluginMessage: PluginMessagesFromPlugin }>) => {
        switch (pluginMessage.type) {
          case "fromPlugin": {
            console.log(pluginMessage.payload.id);
            console.log(pluginMessage.payload.content);
            break;
          }

          default: {
            break;
          }
        }
      },
      { signal: abortController.signal },
    );

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div>
      <p>{count}</p>

      <button type="button" onClick={() => setCount((v) => v + 1)}>
        count up
      </button>

      <div className="flex flex-col">
        <button
          className="text-left"
          type="button"
          onClick={() => postMessageFromUi({ type: "initiate" })}
        >
          initiate
        </button>

        <button
          className="text-left"
          type="button"
          onClick={() =>
            postMessageFromUi({ type: "selectNode", payload: { id: "123" } })
          }
        >
          selectNode
        </button>
      </div>
    </div>
  );
}
