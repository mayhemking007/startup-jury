import { tools } from "./index.js"

export const executeTool = async (action : string, input : any) => {
    const tool = tools[action as keyof typeof tools];
    if(!tool){
        throw new Error("Cannot find the tool " + action);
    }
    try{
        const result = await tool.execute(input);
        return result;
    }
    catch(e){
        console.error("Tool execution failed", e);
        return {error : "Tool execution failed"}
    }
}