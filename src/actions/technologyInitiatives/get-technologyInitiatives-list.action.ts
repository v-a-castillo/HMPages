import { technologyInitiativesApi } from "@/api/TechnologyInitiatives.api";

export const getTechnologyInitiativesAction = async () =>{
    let times = 0;
    console.log("call N", times++)
    const {data} = await technologyInitiativesApi.get('/TLM/TechnologyInitiativesList');
    return data;
}