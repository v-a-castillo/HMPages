import { technologyInitiativesApi } from "@/api/TechnologyInitiatives.api";


export const getTechnologyInitiativByIdAction = async (id:string) => {

    if(!id) throw new Error('Id is required');

    if(id === 'new'){
        return null;
    }
    
    const {data} = await technologyInitiativesApi.get(`/TLM/TechnologyInitiativesList/${id}`);

    return{
        data
    }


}