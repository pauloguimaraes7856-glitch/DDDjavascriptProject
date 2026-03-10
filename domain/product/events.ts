import { ProductId, Quantity, StockLevel } from "./types"

export type ProductCreatedEvent = {
    type: "ProductCreated"
    productId: ProductId
}

export type PriceUpdatedEvent = {
    type: "PriceUpdated"
    productId: ProductId
}

export type StockReducedEvent = {
    type: "StockReduced"
    productId: ProductId
    newLevel: StockLevel
    quantity: Quantity
}

export type DomainEvent =
    | ProductCreatedEvent
    | PriceUpdatedEvent
    | StockReducedEvent