import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from "../common.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  postArray=[];
  searchText
username=this.cs.getName();
id=this.cs.getGid();
constructor(private http:HttpClient,private cs: CommonService) {
     
  this.http.post("https://locate-it-server.herokuapp.com/find/myposts",{
"gid":this.id
  })
  .subscribe((res)=>{
console.log("done",res["data"]);
var json=res['data']
this.postArray=res["data"]
console.log(this.postArray)
  })
 }

  ngOnInit() {
  }

}
