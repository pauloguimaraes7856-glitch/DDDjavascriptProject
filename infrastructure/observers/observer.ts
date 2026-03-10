import { DomainEvent } from "../../domain/product/events"

export type Observer = (event: DomainEvent) => void