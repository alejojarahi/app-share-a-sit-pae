import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  prueba = ' esto es una prueba';

  constructor() { }

  ngOnInit() {
  }

}
