import { Book } from './../../models/book.model';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Injectable()
export class BookRestProvider {

  private url="https://san1150.herokuapp.com";
 
     
  constructor(public http: HttpClient) {    
  }

  getbooklist():Observable<any>{        
    return this.http.get<Book>(this.url + '/books');
  }

  getbookById(bookid:number):Observable<any>{        
    return this.http.get<Book>(this.url + '/book/' + bookid);
  }

  getbookLastId(){        
    return new Promise((resolve, reject) => {        
      this.http.get<number>(this.url + '/lastbookid' ).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });

  }

  getOrderLastId(){        
    return new Promise((resolve, reject) => {        
      this.http.get<number>(this.url + '/lastorderid' ).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });

  }

  editBookLastId(lastid:number) {
    
    
    return new Promise((resolve, reject) => {
      let lastidsend='{"bookid":' + lastid + '}';
      this.http.put(this.url + '/lastbookid',JSON.parse(lastidsend) ,{
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      })
      .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
      });
  }


  editOrderLastId(lastOrderid:number) {
    
    
    return new Promise((resolve, reject) => {
      let lastOrderIdsend='{"orderId":' + lastOrderid + '}';
      this.http.put(this.url + '/lastorderid',JSON.parse(lastOrderIdsend) ,{
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      })
      .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
      });
  }


  

  editBook(book:Book) {
    
    return new Promise((resolve, reject) => {
      this.http.put(this.url + '/book', JSON.stringify(book),{
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  addOrder(order:any) {
    
    return new Promise((resolve, reject) => {
      
      this.http.post(this.url + '/order', JSON.stringify(order), {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      } )
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
      
    });

  }

  addBook(book:Book) {
    
    return new Promise((resolve, reject) => {
      
      this.http.post(this.url + '/book', JSON.stringify(book), {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      } )
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
      
    });

  }

  deletebookById(bookid:number){      
    return new Promise( () => {
      this.http.delete(this.url + '/book/' + bookid)
      .subscribe();
    });
    
  }


}