import { useQuery } from "@tanstack/react-query"

export const useTMLQuery = (fn:any, info:string) => {
    return  useQuery({
        queryKey: ['TLM', {info}],
        queryFn: () => fn()
    })
}