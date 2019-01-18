import { BookListPage } from './../book-list/book-list';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  showBooklist(categoryName:string){
    console.log(categoryName);
    this.navCtrl.push( BookListPage, 
      {category:categoryName}
      );


  }

}
