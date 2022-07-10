import { useContext } from "react";

// Context:
import { ProductContext } from "../context/productContext";

// CSS:
import styles from '../styles/styles.module.css';

// Images:
import noImage from '../assets/no-image.jpg';



export const ProductImage = ({ img = '' }) => {

    const { product } = useContext(ProductContext);

    let imgToShow: string = '';

    if (img) {
        imgToShow = img;
    } else if (product.img) {
        imgToShow = product.img;
    } else {
        imgToShow = noImage
    }

    return (
        <img
            className={styles.productImg}
            src={imgToShow}
            alt={product.title} />
    )
}