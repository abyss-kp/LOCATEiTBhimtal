import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { CKEditorModule } from 'ngx-ckeditor';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const routes:Routes=[
  {path:"",component:HomeComponent},
  {path:"AllPosts",component:AllPostsComponent},
  {path : "dashboard" , component:DashboardComponent},
  {path:'addPost',component:AddPostComponent}
]

import {SocialLoginModule,AuthServiceConfig ,GoogleLoginProvider, } from 'angular-6-social-login';
import { CommonService } from './common.service';
import { URLService } from './config/url.service';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PostfilterPipe } from './postfilter.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { AddPostComponent } from './add-post/add-post.component';
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("373941203091-i6s44m0o6ohjvt8hktcpnfkq6dogh2ok.apps.googleusercontent.com")
        }
      ]
  );
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AllPostsComponent,
    PostfilterPipe,
    DashboardComponent,
    ReadMoreComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    SocialLoginModule,FormsModule,
    CKEditorModule
  ],
  providers: [CommonService,{
    provide:AuthServiceConfig,
    useFactory:getAuthServiceConfigs
  },URLService],
  bootstrap: [AppComponent]
})
export class AppModule { }
