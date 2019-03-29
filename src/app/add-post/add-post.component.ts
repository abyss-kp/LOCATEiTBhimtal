import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  title
  editorValue: string = '';
  onOff=true;
  constructor(private http1:HttpClient,private myRoute: Router,private cs:CommonService) { 
    this.onOff=false;
  }


  Addpost(){
    this.onOff=true;
    console.log("click")
    var stripedHtml = this.editorValue.replace(/<[^>]+>/g, '');
    this.http1.post("https://locate-it-server.herokuapp.com/posts/add",{
  "title":this.title.toUpperCase(),
  "desc":stripedHtml,
  "ied":this.cs.getGid(),
  "image":this.cs.getImage(),
  "name":this.cs.getName()
    })
    .subscribe((res)=>{
      console.log("response from api")
      this.myRoute.navigate(["/dashboard"]);
    })
     
    
   }

  ngOnInit() {
  }

}
