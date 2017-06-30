//our root app component
import { Component, NgModule, VERSION } from '@angular/core';
import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { ContactPage }from '../../pages/contact/contact';

@Pipe({
    name: 'uniqFilter',
    pure: false
})
@Injectable()
export class UniquePipe implements PipeTransform {
    _:any;
    accounts:any;
    constructor(private _contactPage: ContactPage) {
      this.accounts =_contactPage.routes 
  }
    transform(items: any[], args: any[]): any {
        // filter items array, items which match and return true will be kept, false will be filtered out

        return this._.uniqBy(items, args);
    }
}



