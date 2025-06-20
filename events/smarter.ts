import EventEmitter from "events";
import { logger } from "./logger";



class SmartEvent extends EventEmitter{}

export const smartEvent = new SmartEvent()


smartEvent.on("note",()=>{
    console.log("I am happy")
})


