import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http:HttpClient) { }

gettasks(){

  return this.http.get('http://127.0.0.1:8000//noncompletedtasks/')

}
posttasks(data:any){
return this.http.post('http://127.0.0.1:8000//noncompletedtasks/',data)

}

deletetaskbyid(id:any){
return this.http.delete(`http://127.0.0.1:8000/noncompletedtasks/${id}/`)

}
gettaskbyid(id:any){
  return this.http.get<any>(`http://127.0.0.1:8000/noncompletedtasks/${id}/`)


}
updatetaskbyid(id:any,data:any){
 
  return this.http.put<any>(`http://127.0.0.1:8000/noncompletedtasks/${id}/`,data)




}

}
