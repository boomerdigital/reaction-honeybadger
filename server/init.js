import { Hooks, Logger } from "/server/api";
import Honeybadger from "honeybadger";

function initializeHoneybadger() {
  Honeybadger.configure({
    apiKey: process.env.HONEYBADGER_API_KEY
  });
}

Hooks.Events.add("afterCoreInit", () => {
  initializeHoneybadger();
  Logger.info("Initializing Honeybadger with key: ", process.env.HONEYBADGER_API_KEY);
});
