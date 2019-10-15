import { Component, OnInit } from '@angular/core';

import data2 from '../mocks/listHero.json';
import * as locals from "../assets/locals/local.json";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit  {
  title = locals.title;
  brandName = locals.brandName;
  searchTitle = locals.searchTitle;
  developerName = locals.developerName;
  addToBag = locals.addToBag;
  removeFromBag = locals.removeFromBag;
  isSelected = false;
  isSpinnerRunning = false;
  totalPrice: number = 0;
  carname = "";
  totalSelected = [];
  changeLog = [];
  json;
  carObj = {
    "id": '',
    "modelClass": "",
    "version": "",
    "price": {
      "amount": "",
      "currency": "",
      "locale": ""
    },
    "imagePath": ""
  };

  constructor(
  ) { }

  ngOnInit() {
    this.runSpinner();
    setTimeout((obj)=>{
      this.loadData();
    },3000);
  }

  loadData(){
    this.isSpinnerRunning = false;
    this.json = data2;
    this.json.forEach((obj) => {
      obj['selected'] = false;
    });
  }

  runSpinner(){
    this.isSpinnerRunning = true;
  }

  add(car, i) {
    this.isSelected = true;
    this.carObj = car;
    this.carObj.id = i;
    car.selected = 'true';
    this.getSelectedVehicles();
  }

  remove(car, i) {
    this.isSelected = false;
    car.selected = false;
    this.getSelectedVehicles();
  }

  getSelectedVehicles() {
    let data = this.json.filter((obj) => {
      return obj['selected'] === 'true';
    });
    this.updatePrice(data);
  }

  updatePrice(data) {
    this.totalPrice = 0;
    data.forEach((obj) => {
      this.totalPrice += Number(obj.price.amount);
    })
  }
}
