import {IStrategy} from "../interface/IStrategy";
import {Item} from "./item";

export class BackstageStrategy implements IStrategy{

    public Update(item:Item): Item{
        var sellIn = item.sellIn - 1;
        var quality = 0;
        if(sellIn< 0 ){
            quality = 0;
        }
        else if (sellIn<=5){
            quality = item.quality + 3;
        }
        else if (sellIn<=10){
            quality = item.quality +2 ;
        }
        else{
            quality = item.quality + 1 ;
        }
        return new Item(item.name,sellIn,Helper.ValidaQuality(quality));
    }



}