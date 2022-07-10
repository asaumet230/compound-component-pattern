// Context:
import { ProductContext } from '../context/productContext';

// Hooks:
import { useProduct } from '../hooks/useProduct';

// Interfaces:
import { ProductCardProps } from '../interfaces/interfaces';

// CSS:
import styles from '../styles/styles.module.css';



export const ProductCard = ({ product, children }: ProductCardProps) => {


    const { Provider } = ProductContext;
    const { counter, increaseBy } = useProduct();

    return (

        <Provider value={{
            counter,
            product,
            increaseBy,
        }}>
            <div className={styles.productCard}>
                {children}
            </div>
        </Provider>


    )
}

