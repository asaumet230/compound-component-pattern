import { useContext } from "react";

// Context:
import { ProductContext } from "../context/productContext";

// CSS:
import styles from '../styles/styles.module.css';


export const ProductTitle = ({ title = '' }) => {

    const { product } = useContext(ProductContext);
    let titleToShow: string = '';

    title.length > 0 ? titleToShow = title : titleToShow = product.title;

    return (
        <span className={styles.productDescription}>{titleToShow}</span>
    )
}
