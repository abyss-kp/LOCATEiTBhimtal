import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  setGid(id){
    localStorage.setItem('GoogleId',id);
  }

  setName(name){
    localStorage.setItem('UserName',name);
  }

  setImage(image){
    localStorage.setItem('UserImage',image);
  }
  setToken(token){
    localStorage.setItem('GoogleToken',token)
  }

  getGid(){
return JSON.parse(localStorage.getItem('GoogleId'))
  }

  getName(){
return localStorage.getItem('UserName')
  }

  getImage(){
return localStorage.getItem('UserImage')
  }

  getToken(){
    return localStorage.getItem('GoogleToken')
  }

  logOut(){
    localStorage.removeItem('UserName')
    localStorage.removeItem('GoogleToken')
    localStorage.removeItem('UserImage')
    localStorage.removeItem('GoogleId')
  }
}
