import {IStrategy} from "../interface/IStrategy";
import {AgedBrieStrategy} from "../clases/AgedBrieStrategy";
import {BackstageStrategy} from "../clases/BackstageStrategy";
import {SulfurasStrategy} from "../clases/SulfurasStrategy";
import {ConjuredStrategy} from "../clases/ConjuredStrategy";
import {DefaultStrategy} from "../clases/DefaultStrategy";
import {Item} from "../clases/item";

export class StrategyContext{

    private strategy: IStrategy;

    constructor(name:string) {
        switch (name){
            case 'Aged Brie':
                this.strategy = new AgedBrieStrategy();
            case 'Backstage passes to a TAFKAL80ETC concert':
                this.strategy = new BackstageStrategy();
            case 'Sulfuras, Hand of Ragnaros':
                // se construye con calidad 80 por ser Sulfura
                this.strategy =new  SulfurasStrategy();
            case 'Conjured':
                this.strategy = new ConjuredStrategy();
            default:
                this.strategy = new DefaultStrategy();

        }
    }

    public Update(item: Item): Item{
        return this.strategy.Update(item);
    }

}