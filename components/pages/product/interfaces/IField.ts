import { IOptions } from "./IOptions";

export interface IField {
    id: number,
    category_id: number,
    name: string,
    type: string,
    options?: IOptions,
    created_at: string,
    updated_at: string
}