import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  signedIn: BehaviorSubject<boolean>;

  constructor(private authService: AuthService) {
    this.signedIn = this.authService.signIn;
  }
  
  ngOnInit() {
    //start when component display to check if the "sign in" happened.
    this.authService.CheckAuth().subscribe(() => { });
  }
}
