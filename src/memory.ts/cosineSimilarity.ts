export const cosineSimilarity = (vectA : number[], vectB : number[]) => {
    if(vectA.length !== vectB.length){
        throw new Error("Vectors must be of same size");
    }
    let dot = 0, magA = 0, magB = 0;
    for(let i = 0; i < vectA.length; i++){
        dot += vectA[i]! * vectB[i]!;
        magA += vectA[i]! * vectA[i]!;
        magB += vectB[i]! * vectB[i]!;
    }
    if(magA === 0 || magB === 0) return 0;

    return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}