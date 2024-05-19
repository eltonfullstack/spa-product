export interface ProductModel {
    id?: number;
    name: string;
    image: string;
    description: string;
    price: number;
}

export interface Product {
    productlist: ProductModel[];
    productobj: ProductModel;
    ErrorMessage: string;
}