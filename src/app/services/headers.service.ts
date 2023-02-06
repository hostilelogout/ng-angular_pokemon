import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
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
