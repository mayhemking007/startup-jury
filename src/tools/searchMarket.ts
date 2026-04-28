import type { Tool } from "../types.js";

export const searchMarket : Tool = {
    name : "search_market",
    description : "Search Market Trends for given query",
    execute : async (input : {query : string}) => {
        const {query} = input;
        return {
            summary: `Market for "${query}" is growing but competitive.`,
            demand: "medium-high",
            competition: "high"
        }
    }
}