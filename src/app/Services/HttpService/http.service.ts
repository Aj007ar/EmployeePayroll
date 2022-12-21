import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpclient:HttpClient) { }

  postService(url:string,reqData: any, token: boolean = false, httpOptions: any) {
    return this.httpclient.post(url,reqData,token && httpOptions)
  }
}
