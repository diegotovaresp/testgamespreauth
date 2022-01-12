import {IStrategy} from "../interface/IStrategy";
import {Item} from "./item";

export class ConjuredStrategy implements IStrategy{

    public Update(item:Item): Item{
        var quality = item.quality - 2  ;
        return new Item(item.name,item.sellIn,Helper.ValidaQuality(quality));
    }



}