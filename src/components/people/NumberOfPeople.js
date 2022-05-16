import { useForm } from "react-hook-form";

import styles from './numberOfPeople.module.css'

export function NumberOfPeople({onChangePeople, numberOfPeople}) {
    const { register, formState: { errors }, handleSubmit } = useForm()
    return (
        <form onChange={handleSubmit(onChangePeople)}>
            <h3 className={styles.peopleHeading}>Number of People</h3>
            <p className={styles.errorMessage}>{errors.people?.type === 'min' && "Can't be zero"}</p> 
            <input  placeholder="0" 
             className={errors.people ? [styles.peopleInput, styles.errorBorder].join(" "): styles.peopleInput}
            {...register("people", { min: 1 })} value={numberOfPeople} />
            
        </form>

    )
}