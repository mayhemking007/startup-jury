import { openai } from "../llm/openai/client.js";

export const embedder = async (text : string) => {
    try{
        const response = await openai.embeddings.create({
            model : "text-embedding-3-small",
            input : text
        });
        return response.data[0]?.embedding;
    }
    catch(e){
        throw e;
    }
}