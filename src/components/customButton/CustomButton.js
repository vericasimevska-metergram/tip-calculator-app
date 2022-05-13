import styles from './customButton.module.css'
import { useForm } from "react-hook-form";

export function CustomButton({onCustomField}) {
    const { register, formState: { errors }, handleSubmit } = useForm()
    return (
        <form onChange={handleSubmit(onCustomField)}>
        <input className={styles.button} placeholder="Custom"  {...register("customButton")}></input>
        </form>
    )
}