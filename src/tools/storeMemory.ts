import type { Tool } from "../types.js";

export const storeMemory : Tool = {
    name : "store_memory",
    description : "Store memory in memory",
    execute : async (input : {content : string}) => {
        console.log("Storing in DB: " + input.content);
        return {status : "stored"}
    }
}