import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AddbookComponent } from './addbook/addbook.component';

import { AuthorComponent } from './author/author.component';
import { BooksviewComponent } from './booksview/booksview.component';
import { AutorviewComponent } from './autorview/autorview.component';

import {FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BooksComponent,
    AuthorsComponent,
    SigninComponent,
    SignupComponent,
    AddbookComponent,
    
    AuthorComponent,
    
    BooksviewComponent,
    
    AutorviewComponent,
    
    
    
   
  
    
  
    
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
