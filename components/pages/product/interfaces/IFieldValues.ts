import { IField } from "./IField";

export interface IFieldValues {
    id: number,
    field_id: number,
    product_id: number,
    value: number | string,
    created_at: string,
    updated_at: string,
    field?: IField
}