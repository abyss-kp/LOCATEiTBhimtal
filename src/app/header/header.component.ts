import { Component, OnInit } from '@angular/core';
import { CommonService } from "../common.service";
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
image
isLogedIn=false
name
  constructor(private cs:CommonService, private socialAuthService: AuthService,private http:HttpClient) { }

  ngOnInit() {  
    if(this.cs.getImage()===null){
      console.log(localStorage.getItem('image'))
      this.image="https://www.w3schools.com/howto/img_avatar.png"
    }
    else{
      this.image=this.cs.getImage()
    }
    this.isLogedIn=this.cs.getToken()!=null
    this.name=this.cs.getName()
  }

  public googleSignIn() {
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
      this.cs.setGid(userData.id)
      this.cs.setToken(userData.token);
      this.cs.setName(userData.name);
      this.cs.setImage(userData.image);
      window.location.reload()
    const url = "https://locate-it-server.herokuapp.com/oauth/google"; // site that doesn’t send Access-Control-*

      // this.http.post( url,{
      //   "data":userData
      // })
      // .subscribe((res)=>{
      //   console.log("response from api",res["msg"])
      // })
      }
    );
  }

  logOut(){
  this.cs.logOut();
  window.location.reload()
  }

}
