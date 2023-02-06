import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// defines a service to create a header. and returns it with the supplied key.
export class HeadersService {

  constructor() { }

  public createHeader (key: string) {

    const headers = new HttpHeaders(
      {
        "Content-Type": "application/json",
        "x-api-key": key
      })
    
      return headers;
  }
}
