import styles from './resetButton.module.css'
export function ResetButton({resetButtonClicked}) {
    return (
        <div className={styles.resetDiv}>
        <button type= "reset" className={styles.resetButton} onClick ={resetButtonClicked}>Reset</button>
        </div>

    )
}