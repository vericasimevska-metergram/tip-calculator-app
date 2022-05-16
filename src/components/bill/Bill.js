import { useForm } from "react-hook-form";
import styles from './bill.module.css'

export function Bill({onChangeBill, bill}) {
    const { register, formState: { errors }, handleSubmit } = useForm()
  
    return (
        <form onChange={handleSubmit(onChangeBill)}>
            <h3 className={styles.billHeading}>Bill</h3>
            <p className={styles.errorMessage}>{errors.bill?.type === 'min' && "Can't be zero"}</p>
            <input type="text" placeholder="0" 
            className={errors.bill ? [styles.billInput, styles.errorBorder].join(" "): styles.billInput}
             {...register("bill", { min: 1 })} value={bill}></input>
        </form>

    )
}
