import { BookDetailPage } from './../book-detail/book-detail';
import { Book } from './../../models/book.model';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BookRestProvider } from '../../providers/book-rest/book-rest';

/**
 * Generated class for the BookListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage { 

  category:string;
  books:Book;

  constructor(public bookRest: BookRestProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
    this.category=this.navParams.get("category");
    console.log(this.category);
    this.bookRest.getBooklist().subscribe( data =>{
      this.books=data.filter(book=>book.category === this.category);
    }

    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookListPage');
    
  }
  goBack(){
    this.navCtrl.pop();
  }

  showBook(bookid:string){
    
    this.navCtrl.push( BookDetailPage, 
      {bookId:bookid}
      );


  }
}
