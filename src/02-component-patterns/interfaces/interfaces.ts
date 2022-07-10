import { ReactElement } from "react";

export interface ProductCardHOCProps {
    ({ product, children }: ProductCardProps): JSX.Element;
    Title: ({ title }: { title?: string }) => JSX.Element;
    Image: ({ img }: { img?: string }) => JSX.Element;
    Buttons: () => JSX.Element;
}


export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
}

export interface ContextProps {
    product: Product;
    increaseBy: (value: number) => void;
    counter: number;
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}


