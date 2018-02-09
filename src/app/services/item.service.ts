import {Item} from '../models/item.model';

export class ItemService{
    items:Item[];
    constructor(){
        this.items = [new Item("I001","Pen",10,2),
                      new Item("I002","Pencil",5,6)];
    }
    getItems(){
        return this.items;
    }
    /*updateItem(i:Item){
        this.item = i;
        if(this.item.IQty>=1)
            this.item.IQty -= 1;
        console.log(this.item);
    }*/
}