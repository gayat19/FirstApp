import {Component} from '@angular/core';

import {Item} from '../models/item.model';
import {ItemService} from '../services/item.service';

@Component({
    selector:'app-items',
    templateUrl:'./items.component.html'
})
export class ItemsComponent{
    items:Item[];
    constructor(private itemService:ItemService){
        this.items = this.itemService.getItems();
    }
}