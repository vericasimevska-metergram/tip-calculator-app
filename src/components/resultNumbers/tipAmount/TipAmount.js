import styles from '../resultNumbers.module.css'
import { useState, useEffect } from "react";

export function TipAmount({tipAmount}) {
    return (
        <div className={styles.resultNumbers}>
            <div className={styles.paragraph}>
                <p className={styles.heading}>Tip Amount</p>
                <span className={styles.personSpan}>/person</span>
            </div>
            <p className={styles.resultNumber}>$
                {(tipAmount === 'NaN' || tipAmount === 'Infinity') ? "0.00" :  tipAmount}
            </p>
        </div>
    )
}

