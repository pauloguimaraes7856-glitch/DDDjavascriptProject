import { DomainEvent } from "../../domain/product/events"

export const saveToDatabaseMock = (event: DomainEvent) => {

    console.log("Saved to database:", JSON.stringify(event))
}   