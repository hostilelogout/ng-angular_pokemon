import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map,switchMap,of } from 'rxjs';
import { environment } from 'src/environments';
import { User } from '../models/user.model';
import { HeadersService } from './headers.service';


const { ANGULAR_APP_API_URL, REACT_APP_API_KEY } = environment;

@Injectable({
  providedIn: 'root'
})
// defines how logic for handling a login to the website. as well as containing logic if no user exist to create a new user.
export class LoginService {

  constructor(
    private readonly http: HttpClient,
    private readonly headerService: HeadersService
    ) { }

  public login(username: string): Observable<User> {
      return this.checkUser(username)
      .pipe(
        switchMap((response: User | undefined) => {
          if (response === undefined){
            return this.createUser(username);
          }
          return of(response)
        })
      )
   }

  // defines functionality for checking if a user exist with the supplied environment key and username that is shared with a observable<User>
  private checkUser(username: string): Observable<User | undefined> {
    return this.http.get<User[]>(`${ANGULAR_APP_API_URL}?username=${username}`)
      .pipe(
        map((response: User[]) => response.pop())
      )
  }
  // defines functionality for creating a user. and then posting to the server.
  private createUser(username: string): Observable<User> {
    const user = {
      username,
      pokemon: []
    };

    const headers = this.headerService.createHeader(REACT_APP_API_KEY)

    return this.http.post<User>(ANGULAR_APP_API_URL,user, {
      headers
    })
  }
}
