import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title='FormDemo';
  User={username:'',
  password:'',Name:'',Address:'',Phone:''};
userVerify()
{
  alert("success");
}


  constructor() { }

  ngOnInit(): void {
  }

}
