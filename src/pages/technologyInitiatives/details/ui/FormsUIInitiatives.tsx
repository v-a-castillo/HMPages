import { useForm } from "react-hook-form";
import type { InputsInitiatives } from "../../types/TechInitiativesTypes";



interface Props{
    inputsInitiatives?:InputsInitiatives,
    //Methods
    onSubmit : (initiativesLike:Partial<InputsInitiatives>) => (Promise<void>)
}

export const FormsUIInitiatives = ({inputsInitiatives, onSubmit}:Props) => {


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: inputsInitiatives
    });


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}  className="space-y-4">
                <div>
                    <label>ID</label>
                    <input
                        type="number"
                        {...register("id", { required: "El id es requerido" })}
                    />
                    {errors.id && <p>{errors.id.message}</p>}
                </div>

                <div>
                    <label>Tech Initiative Number</label>
                    <input
                        type="text"
                        {...register("techInitiativeNumber", {
                            required: "El número es requerido",
                        })}
                    />
                    {errors.techInitiativeNumber && (
                        <p>{errors.techInitiativeNumber.message}</p>
                    )}
                </div>

                <div>
                    <label>Tech Initiative Name</label>
                    <input
                        type="text"
                        {...register("techInitiativeName", {
                            required: "El nombre es requerido",
                        })}
                    />
                    {errors.techInitiativeName && (
                        <p>{errors.techInitiativeName.message}</p>
                    )}
                </div>

                <div>
                    <label>Technology KickOff</label>
                    <input type="date" {...register("technologyKickOff")} />
                </div>

                <div>
                    <label>Humana EoL</label>
                    <input type="date" {...register("humanaEoL")} />
                </div>

                <div>
                    <label>State</label>
                    <input type="text" {...register("state")} />
                </div>

                <div>
                    <label>Technology Details</label>
                    <textarea {...register("technologyDetails")} />
                </div>

                <div>
                    <label>Extended Support</label>
                    <input type="text" {...register("extendedSupport")} />
                </div>

                <div>
                    <label>Percent Complete</label>
                    <input type="text" {...register("percentComplete")} />
                </div>

                <div>
                    <label>Technology Summary (URL)</label>
                    <input type="url" {...register("technologySummary")} />
                </div>

                <div>
                    <label>Program Details</label>
                    <textarea {...register("programDetails")} />
                </div>

                <button type="submit">Guardar</button>
            </form>
        </>
    )
}