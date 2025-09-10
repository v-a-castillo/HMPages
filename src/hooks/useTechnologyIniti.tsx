import { createUpdateTechnologyInitia } from "@/actions/technologyInitiatives/create-update-TechnologyInitia.actions";
import { getTechnologyInitiativByIdAction } from "../actions/technologyInitiatives/get-TechnologyInitiativ-by-id.Action";
import { useMutation, useQuery } from "@tanstack/react-query"


export const useTechnologyIniti = (id: string) => {

    const query = useQuery({
        queryKey: ['TechnologyIniti', { id }],
        queryFn: () => getTechnologyInitiativByIdAction(id),
        retry: false,
        staleTime: 1000 * 60 * 5
    });

    const technologyInitiMutation =  useMutation({
        mutationFn: createUpdateTechnologyInitia,
        onSuccess: (p) =>{
            console.log('Ok' , p)
        }
    });



    return {
        ...query,
        technologyInitiMutation
    }


}