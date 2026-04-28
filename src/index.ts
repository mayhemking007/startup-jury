import { runLLM } from "./llm/client.js";
import { executeTool } from "./tools/executor.js";

const main = async () => {
    const res = await runLLM({
        goal: "Validate idea: AI fitness app",
        tools: [
            { name: "search_market", description: "Search market trends" },
            { name: "retrieve_memory", description: "Get past insights" }
        ]
        });
    console.log(res);
}

const test = async () => {
    const result = await executeTool("search_market", {query : "AI fitness App"});
    console.log(result);
}

test();
// main();