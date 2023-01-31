import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { switchMap } from 'rxjs';
import { of } from 'rxjs';
import { environment } from 'src/environments';
import { User } from '../models/user.model';
import { LocalStorage } from '../utils/localstorage.util';


const { ANGULAR_APP_API_URL, REACT_APP_API_KEY } = environment;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly http: HttpClient) { }

  public login(username: string): Observable<User> {
      return this.checkUser(username)
      .pipe(
        switchMap((response: User | undefined) => {
          if (response === undefined){
            return this.createUser(username);
          }
          return of(response)
        })
      );
   }

  // check to see if user exist
  private checkUser(username: string): Observable<User | undefined> {
    return this.http.get<User[]>('${ANGULAR_APP_API_URL}?username=${username}')
      .pipe(
        map((response: User[]) => response.pop())
      )
  }

  private createUser(username: string): Observable<User> {
    const user = {
      username,
      Pokemon: []
    };

    LocalStorage.SaveToLocal(username,user);

    const headers = new HttpHeaders ({
      "Content-Type": "application/json",
      "x-api-key": REACT_APP_API_KEY
    });

    return this.http.post<User>(ANGULAR_APP_API_URL,user, {
      headers
    })
  }
}
