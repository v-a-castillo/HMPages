import { useTechnologyIniti } from "@/hooks/useTechnologyIniti";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { FormsUIInitiatives } from "./ui/FormsUIInitiatives";
import type { InputsInitiatives } from "../types/TechInitiativesTypes";



export const ApplicationInitiativesForm = () => {


  const { id } = useParams();
  const { isLoading, data, isError, technologyInitiMutation } = useTechnologyIniti(id || "");
  const navigate = useNavigate();
  console.log(id)

  const inputsInitiatives = async (inputsInitiatives:Partial<InputsInitiatives>) => {
    await technologyInitiMutation.mutate(inputsInitiatives, {
      onSuccess(data) {
          alert("todo bien",)
          navigate('/app-initiatives')
      },
      onError(error) {
        console.log(error);
        alert("algo salio mal")
      } 
    });
  }

  if (isError) {
    return <Navigate to={"/app-initiatives"} />;
  }

  if (isLoading) {
    return <h1>Loading ....</h1>;
  }

  return (

    <>
    
        <FormsUIInitiatives inputsInitiatives={data?.data}
        onSubmit={inputsInitiatives} />
    </>

  )
};
