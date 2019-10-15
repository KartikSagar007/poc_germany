import { Component, OnInit } from '@angular/core';

import data2 from '../mocks/listHero.json';
import * as locals from "../assets/locals/local.json";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = locals.title;
  brandName = locals.brandName;
  searchTitle = locals.searchTitle;
  developerName = locals.developerName;
  addToBag = locals.addToBag;
  removeFromBag = locals.removeFromBag;
  isSelected = false;
  totalPrice: number = 0;
  carname = "";
  totalSelected = [];
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

  json = data2;

  constructor(
  ) { }

  ngOnInit() {
    this.json.forEach((obj) => {
      obj['selected'] = false;
    })
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
