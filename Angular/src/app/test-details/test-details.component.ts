import { Component, OnInit } from '@angular/core';
import { MyTest } from '../mytest/mytest';
import { MytestService } from '../mytest.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnInit {
  id:String;
  test:MyTest;

  constructor(private service: MytestService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.test=new MyTest();
    this.id=this.route.snapshot.params['id'];

    this.service.searchTest(this.id).subscribe(
      data=>{
        console.log('data is'+data)
        this.test=data;
        console.log('id is'+this.test.testId)
      },
      error=>console.log(error)
    );
  }
  list(){
    this.router.navigate(['test']);
  }

}
