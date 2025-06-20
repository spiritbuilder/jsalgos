import EventEmitter from "events";
import { smartEvent } from "./smarter";

class Logger extends EventEmitter {}

export const logger = new Logger();

logger.on("s", (m) => {
  console.log(m);
  smartEvent.emit("note")
});
