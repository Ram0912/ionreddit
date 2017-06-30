import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GithubService } from '../../app/service/github.service';

@Component({
  
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[GithubService]
})
export class HomePage {
    user:any;
    repos:any;
    username:string;
  constructor(public navCtrl: NavController, private _githubService:GithubService) {


  }
      search(){
        this._githubService.updateUsername(this.username);
        
        this._githubService.getUser().subscribe(user => {
            //console.log(user);
            this.user = user;
        });
        
        this._githubService.getRepos().subscribe(repos => {
            this.repos = repos;
        });
    }

}
