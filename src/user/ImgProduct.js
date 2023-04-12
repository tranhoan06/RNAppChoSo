import { BASE_PRODUCT } from "../constants.js/app"

export const getImageProduct = (imageName) => {
    return `${BASE_PRODUCT}/data/products/${imageName}`
}