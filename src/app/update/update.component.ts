import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApicallService } from '../apicall.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  constructor(public route:ActivatedRoute,public editapi:ApicallService,public router:Router){}
  data1={'task_name':'','task_desc':'','date_added':'','completed':''} 
  id:any;


  
  ngOnInit(){
this.id=this.route.snapshot.paramMap.get('id')
// console.log(this.id);
this.editapi.gettaskbyid(this.id).subscribe((res)=>{
console.log(res);
   this.data1=res;


})


  }
  
  onSubmit(){
    // console.log(this.data1)
  this.editapi.updatetaskbyid(this.id,this.data1).subscribe((res)=>{

    console.log("success");
    this.router.navigate(['']);
    

  })


  } 



}
