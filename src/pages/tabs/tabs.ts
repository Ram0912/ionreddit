import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { TrainPage }from '../train/train';
import {CitiesPage}from '../cities/cities';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab5Root = TrainPage;
  tab4Root = CitiesPage;
  constructor() {

  }
}
