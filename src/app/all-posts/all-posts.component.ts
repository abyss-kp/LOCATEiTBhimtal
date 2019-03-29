import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  postArray=[]
  searchText
  GID
  constructor(private http:HttpClient) {
     
    this.http.post("https://locate-it-server.herokuapp.com/find/posts",{})
    .subscribe((res)=>{
//console.log("done",res["data"]);
var json=res['data']
//this.postArray.push(res["data"])
this.postArray=res['data']
console.log(this.postArray)

this.GID=JSON.parse(localStorage.getItem("GoogleId"))
})
}

ngOnInit() {
}

}