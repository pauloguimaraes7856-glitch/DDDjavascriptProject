import { DomainEvent } from "../../domain/product/events"

export const sendEmailMock = (event: DomainEvent) => {

    console.log("Email sent for event:", event.type)
}