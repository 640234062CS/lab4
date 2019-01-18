import { Book } from './../../models/book.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the BookRestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookRestProvider {

  private url="https://raw.githubusercontent.com/kesinee-bo/Images/master/cs_books.json";

  constructor(public http: HttpClient) {
    console.log('Hello BookRestProvider Provider');
  }

  getBooklist():Observable<any>
  {
      return this.http.get<Book>(this.url);
  }

}
