import { Product } from "./post.model";


export const initialState: Product = {
    productlist: [],
    productobj: {
        id: 0,
        name: '',
        image: '',
        description: '',
        price: 0
    },
    ErrorMessage: ''
}