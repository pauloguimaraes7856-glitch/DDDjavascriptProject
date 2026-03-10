import { createPrice, createProduct } from "./domain//product/factories"
import { sendEmailMock } from "./infrastructure/observers/email"
import { saveToDatabaseMock } from "./infrastructure/observers/database"

import { DomainEvent } from "./domain/product/events"
import { v4 as uuidv4 } from "uuid"


const observers = []

observers.push(sendEmailMock)
observers.push(saveToDatabaseMock)


function emit(event: DomainEvent) {

    observers.forEach(observer => observer(event))
}


try {

    const product = createProduct(
        uuidv4(),
        "Shirt",
        createPrice(50)
    )

    emit({
        type: "ProductCreated",
        productId: product.id
    })

} catch (error) {

    if (error instanceof Error) {
        console.error(error.message)
    }
}