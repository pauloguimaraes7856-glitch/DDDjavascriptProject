import { Product, ProductId, ProductName, PriceNumber } from "./types"


// Create Price (validation)

export function createPrice(value: number): PriceNumber {

    if (value <= 0) {
        throw new Error("Price must be positive")
    }

    return value as PriceNumber
}


// Create Product (smart constructor)

export function createProduct(
    id: string,
    name: string,
    price: PriceNumber
): Product {

    if (!id) {
        throw new Error("Product id is required")
    }

    if (name.length < 2) {
        throw new Error("Product name too short")
    }

    return {
        id: id as ProductId,
        name: name as ProductName,
        price
    }
}