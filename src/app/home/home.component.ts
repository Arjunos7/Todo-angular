import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public getapi:ApicallService,public route:Router){}
  data1={'task_name':'','task_desc':'','date_added':''}  


data:any;    
  
ngOnInit(){

  this.getapi.gettasks().subscribe((res)=>{
       console.log(res);
       this.data=res;


  })

}
onsubmit(){

  console.log(this.data1);
  this.getapi.posttasks(this.data1).subscribe((res)=>{
  console.log(res);
  console.log('success');
  this.ngOnInit()

  })
  

}
delete(id:any){

  //  console.log(id);
  if(confirm("Are you sure you want to delete???")){

   this.getapi.deletetaskbyid(id).subscribe((res)=>{
   console.log('success')
   this.ngOnInit();
  

   })

   

  }
  



}
update(id:any){
  // console.log(id);
this.route.navigate(['update',id])
    
}


}
