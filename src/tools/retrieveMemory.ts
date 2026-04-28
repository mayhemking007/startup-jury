import type { Tool } from "../types.js";

export const retrieveMemory : Tool = {
    name : "retrieve_memory",
    description : "Retrieves the data from memory",
    execute : async (input : {query : string}) =>{
        console.log("Data retrieved");
        return {
            results: ["Similar idea had retention issues"]
        }
    }  
}