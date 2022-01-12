import {IStrategy} from "../interface/IStrategy";
import {Item} from "./item";

export class AgedBrieStrategy implements IStrategy{

    public Update(item:Item): Item{
        var quality = item.quality +1 ;
        return new Item(item.name,item.sellIn,quality);
    }



}