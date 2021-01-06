import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthorsComponent } from './authors/authors.component';
import { AutorviewComponent } from './autorview/autorview.component';

import { BooksComponent } from './books/books.component';
import { BooksviewComponent } from './booksview/booksview.component';
import { HeaderComponent } from './header/header.component';


import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'authors',component:AuthorsComponent,
children:[{path:'author',component:AutorviewComponent}]}
,{path:'signin',component:SigninComponent},

{path:'signup',component:SignupComponent},{path:'addbook',component:AddbookComponent},
{path:'books',component:BooksComponent,
children:[{path:'book',component:BooksviewComponent}
]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
