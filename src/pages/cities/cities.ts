import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RouteService}from '../../app/service/route.service';
@Component({
  selector: 'page-cities',
  templateUrl: 'cities.html',
  providers:[RouteService]
})
export class CitiesPage {
imgurl:any;
  constructor(public navCtrl: NavController, private _routeService: RouteService) {

  }
cities(city: string){
this._routeService.getCitiesImg(city).subscribe(imgurl=>{
  this.imgurl=imgurl;
})
}
}