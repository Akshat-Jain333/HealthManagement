import { Component, OnInit } from '@angular/core';
import { MyTest } from './mytest';
import { Observable } from 'rxjs';
import { MytestService } from '../mytest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mytest',
  templateUrl: './mytest.component.html',
  styleUrls: ['./mytest.component.css']
})
export class MytestComponent implements OnInit {
  test:Observable<MyTest[]>;
  constructor(private service: MytestService, private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.test=this.service.getTestList();
  }

  deleteTest(id:String){
    console.log('test remove called in ts file')
    this.service.removeTest(id).subscribe(
      data=>{
        console.log('data is'+data);
        this.reloadData();
      },
      error=>console.log('error is'+error)
    );

  }
  testDetails(id:String){
    this.router.navigate(['detail',id]);
  }

  updateTest(id:String){
    this.router.navigate(['update',id]);
  }

}
