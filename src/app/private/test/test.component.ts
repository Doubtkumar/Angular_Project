import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private testService:TestService) { }

  employee:any[]=[];
  obj:any;
  product:any[]=[];

  ngOnInit(): void {
   this.obj= this.testService.getEmployee();
   this.product=this.obj._embedded.product;
   console.log(this.obj._embedded.product);

   this.testService.getPost().subscribe((data:any)=>{
     console.log(data)
   })
  }

  title:String="rohit";


}
