import { Container } from '../container/Container'
import styles from './calculator.module.css'

export function Calculator({children}) {
    return (
        <Container>
            <div className={styles.calculator}>
                {children}
            </div>
        </Container>
    )
}