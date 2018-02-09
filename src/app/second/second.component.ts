import {Component} from '@angular/core';
import {Item} from '../models/item.model';
import {ItemService} from '../services/item.service';

@Component({
    selector:'app-second',
    templateUrl:'./second.component.html'
})
export class SecondComponent{
    Like:boolean;
    UserName:string;
    items:Item[];
    itemService:ItemService;

        constructor(itemService:ItemService){
            this.Like=false;
            this.UserName="Ramu";
            this.itemService = itemService;
            this.items = this.itemService.getItems();
        }
        clickMe(button){
            this.UserName="Changed"+this.Like;
            this.Like = !this.Like;
            button.disabled=true;
            console.log(button);
        }
        updateItem(){
           
            //this.itemService.updateItem(this.item);
        }
    }