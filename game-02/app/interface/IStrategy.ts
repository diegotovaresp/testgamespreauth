import {Item} from "../clases/item";

export interface IStrategy {
    Update(item: Item): Item;
}