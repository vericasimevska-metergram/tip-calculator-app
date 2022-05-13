import { useForm } from "react-hook-form";
import { useState } from 'react';
import styles from './bill.module.css'

export function Bill({onBlurBill}) {
    const { register, formState: { errors }, handleSubmit } = useForm()
  
    return (
        <form onChange={handleSubmit(onBlurBill)}>
            <h3 className={styles.billHeading}>Bill</h3>
            <p className={styles.errorMessage}>{errors.bill?.type === 'min' && "Can't be zero"}</p>
            <input placeholder="0" className={styles.billInput}  {...register("bill", { min: 1 })} />
        </form>

    )
}