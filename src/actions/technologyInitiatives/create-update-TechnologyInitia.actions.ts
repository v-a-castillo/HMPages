import { technologyInitiativesApi } from "@/api/TechnologyInitiatives.api";
import type { InputsInitiatives } from "@/pages/technologyInitiatives/types/TechInitiativesTypes"



export const createUpdateTechnologyInitia = async (technologyInitia: Partial<InputsInitiatives>) 
    :Promise<InputsInitiatives>  => {
    
    const {id, ...request} = technologyInitia;
    
    // TODO: PUT THE CORRECT VALIDATION FOR CREATING NEW RECORD
    const  isCreating = 0 == 0;
    
    const  {data} = await technologyInitiativesApi<InputsInitiatives>({
        url : isCreating ? '/TLM' : `/TLM/TechnologyInitiativesList/${id}`,
        method: isCreating ? 'POST' : 'PATCH',
        data: request
    })

    return{
        ...data
    }

}