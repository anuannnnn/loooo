import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  title='FormDemo';
  User={username:'',
  password:''};
userVerify()
{
window.open('/')
}


constructor() { }

  ngOnInit(): void {
  }

}

// user={uname:'',password:''}



//   constructor(private _auth:AuthService) { }

//   ngOnInit(): void {
//   }
//   loginUser()
//   {
//     this.authService.loginUser(user)
//   }

// }
