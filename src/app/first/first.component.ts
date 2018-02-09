import {Component} from '@angular/core';
import {Item} from '../models/item.model';
import {ItemService} from '../services/item.service';


@Component({
    selector:'app-first',
    templateUrl:'./first.component.html',
    styles:['h1{background-color:blue;}'],
    styleUrls:['first.component.css']
})
export class FirstComponent{
    Name;
    //item:Item;
    //itemService:ItemService;
    constructor(itemService:ItemService){
        console.log("this is from the first constuctor");
        this.Name = "SomeName";
        //this.itemService = itemService;
       // this.item = this.itemService.getItem();
    }
    showName(name){
        this.Name = name.value;
        console.log(name.value); 
    }
}