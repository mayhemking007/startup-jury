import { runLLM } from "./llm/client.js";

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
main();