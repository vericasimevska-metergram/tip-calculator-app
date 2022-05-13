import styles from '../resultNumbers.module.css'
export function Total({tipTotal}) {

    return (
        <div className={styles.resultNumbers}>
            <div className={styles.paragraph}>
                <p className={styles.heading}>Total</p>
                <span className={styles.personSpan}>/person</span>
            </div>
            <p className={styles.resultNumber}>$
            {(tipTotal === 'NaN' || tipTotal === 'Infinity') ? "0.00" : tipTotal}
            </p>
        </div>
    )
}