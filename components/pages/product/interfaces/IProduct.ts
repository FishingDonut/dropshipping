import { IFieldValues } from "./IFieldValues";

export interface IProduct {
    id: number,
    name: string,
    price: number,
    price_multiplier: number,
    description: string,
    deleted_at?: null | string,
    created_at: string,
    updated_at: string,
    field_values?: IFieldValues[]
}