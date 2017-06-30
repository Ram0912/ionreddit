import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RouteService } from '../../app/service/route.service';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers:[RouteService]
})
export class ContactPage implements OnInit{
routes: any;
routenum:any;
unique:any;
  constructor(public navCtrl: NavController, private _routeService:RouteService) {
console.log(this.routes);
 // this.unique= Array.from(new Set((this.routes).map((itemInArray)=>itemInArray.source)));
  console.log(this.routenum);
  }
  public ngOnInit(): any
  {
    this._routeService.getRoutes().subscribe( routes => {
      this.routes = Array.from(new Set(routes.map((itemInArray)=>itemInArray.source)));
      
    });
  }
  routeNumber(source, destination){
    this._routeService.getRoute(source, destination).subscribe(routenum =>{
      this.routenum=routenum;
    });
  }

  

}
