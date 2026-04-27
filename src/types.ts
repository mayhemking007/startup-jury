export interface outputType {
    thought : string,
    action : string,
    input : Record<string, any>
}

export interface inputType {
    goal : string,
    tools : {name : string, description : string}[],
    memory? : string,
    history? : any[]
}