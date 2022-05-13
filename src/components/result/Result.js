import { Container } from '../container/Container'
import styles from './result.module.css'

export function Result({ children }) {
    return (
        <Container>
            <div className={styles.result}>
                {children}
            </div>
        </Container>
    )
} 