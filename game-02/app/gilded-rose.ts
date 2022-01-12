import {Item} from "./clases/item";
import {StrategyContext} from "./context/StrategyContext";
export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            this.crea(this.items[i]);
        }
        return this.items;
    }

    crea(item:Item){
        var context = new StrategyContext(item.name);
        var result = context.Update(item);
        item.quality = result.quality;
        item.sellIn = result.sellIn;
    }
}
