import { prisma } from "../prisma.js";
import { embedder } from "./embed.js"

export const memoryStore = async (params : {
    content : string,
    type : string,
    agent : string
}) => {
    try{
        const embedding = await embedder(params.content);
        const store = await prisma.memory.create({
            data : {
                content : params.content,
                type : params.type,
                agent : params.agent,
                embedding : embedding!
            }
        });
        return store;
    }
    catch(e){
        throw e;
    }
    
}