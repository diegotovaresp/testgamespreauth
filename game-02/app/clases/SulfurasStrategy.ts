import {IStrategy} from "../interface/IStrategy";
import {Item} from "./item";

export class SulfurasStrategy implements IStrategy{

    public Update(item:Item): Item{
        var quality = 80  ;
        return new Item(item.name,item.sellIn,quality);
    }



}