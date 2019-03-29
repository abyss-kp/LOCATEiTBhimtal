import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class URLService {

  constructor(private http:HttpClient) { }

  defaultImg="https://www.w3schools.com/howto/img_avatar.png"
  // addPostUrl="https://locate-it-server.herokuapp.com/posts/add"
  // addPost(){
  //   return 
  // }
}
 