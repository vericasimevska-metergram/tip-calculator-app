import styles from './tipButtons.module.css'
const tipButtons = [5, 10, 15, 25, 50];
export function TipButtons({onButtonClicked, children}) {
    return (
        <>
            <h3 className={styles.tipsHeading}>Select Tip %</h3>
            <ul>
                {tipButtons.map((tipButton) =>
                    <li>
                        <button
                            className={styles.button}
                            onClick={() => onButtonClicked(tipButton)}>{tipButton}%</button>
                    </li>
                )}
                {children}
                
            </ul>
        </>
    )
}