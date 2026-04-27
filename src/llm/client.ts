import type { inputType, outputType } from "../types.js";
import { buildinputPrompt } from "./inputPrompt.js";
import { openai } from "./openai/client.js";

export const runLLM = async (input : inputType) : Promise<outputType> =>{
    const prompt = buildinputPrompt(input);
    for(let i = 0; i < 3; i++){
        const response = await openai.chat.completions.create({
            model : "gpt-4o-mini",
            messages : [
                {role : "system", content : "You are a strict JSON generator."},
                {role : "user", content : prompt}
            ],
            temperature : 0
        });
        const raw = response.choices[0]?.message.content || "";
        try{
            const parsed = JSON.parse(raw);
            if(typeof parsed.thought === "string" && typeof parsed.action === "string" && typeof parsed.input === "object"){
                return parsed;
            }
            throw new Error("Invalid output structure");
        }
        catch(e){
            console.log("JSON parsing failed, retrying...", raw);
        }
    }
    throw new Error("LLM failed after retries");
}
