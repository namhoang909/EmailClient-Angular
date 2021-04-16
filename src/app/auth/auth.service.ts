import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface UsernameAvailableResponse {
  available: boolean,
}

interface SignupCredentials {
  username: string,
  password: string,
  passwordConfirmation: string,
}

interface SignupResponse {
  username: string,
}

interface SignInResponse {
  authenticated: boolean,
  username: string,
}

interface SignInCredentials {
  username: string,
  password: string,
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';
  signIn = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(
      `${this.rootUrl}/auth/username`, //or this.rootUrl + '/auth/username'
      {
        username: username,
      }
    );
  }

  Signup(credentials: SignupCredentials) {
    return this.http
      .post<SignupResponse>(this.rootUrl + '/auth/signup', credentials)
      .pipe(
        //if there is error came out of "request", "tap" will be skipped
        tap(() => {
          this.signIn.next(true);
        })
      );
  }

  CheckAuth() {
    return this.http.get<SignInResponse>(`${this.rootUrl}/auth/signedin`).pipe(
      tap(({ authenticated }) => {
        console.log(authenticated);
        this.signIn.next(authenticated);
      })
    );
  }

  SignOut() {
    return this.http.post(`${this.rootUrl}/auth/signout`, {}).pipe(
      tap(() => {
        this.signIn.next(false);
      })
    );
  }

  SignIn(credentials: SignInCredentials) {
    return this.http.post(`${this.rootUrl}/auth/signin`, credentials).pipe(
      tap(() => {
        this.signIn.next(true);
      })
    );
  }
}
