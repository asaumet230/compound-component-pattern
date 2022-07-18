import { CSSProperties, ReactElement } from 'react';

// Context:
import { ProductContext } from '../context/productContext';

// Hooks:
import { useProduct } from '../hooks/useProduct';

// CSS:
import styles from '../styles/styles.module.css';

// Interfaces:
import { Product } from '../interfaces/interfaces';



export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
}

export const ProductCard = ({ product, children, className, style }: Props) => {


    const { Provider } = ProductContext;
    const { counter, increaseBy } = useProduct();

    return (

        <Provider value={{
            counter,
            product,
            increaseBy,
        }}>
            <div
                style={style}
                className={`${styles.productCard} ${className}`}>
                {children}
            </div>
        </Provider>


    )
}

