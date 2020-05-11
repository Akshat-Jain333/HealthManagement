import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MytestService {
  private baseUrl="http://localhost:9090/test/getTest"
  constructor(private http:HttpClient) { }

  searchTest(id: String):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
   }

   saveTest(test: Object):Observable<any>{
    return this.http.post(`${this.baseUrl}/`,test);
   }
   updateTest(test: Object):Observable<any>{
    return this.http.put(`${this.baseUrl}/`,test);
   }

   removeTest(id:String):Observable<any>{
     console.log('remove test calling')
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});

   }
   getTestList():Observable<any>{
     console.log('get testlist Call'+this.http.get(`${this.baseUrl}`))
     return this.http.get(`${this.baseUrl}`)
   }
}
