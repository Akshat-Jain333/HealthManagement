import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MytestComponent } from './mytest/mytest.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { UpdateTestComponent } from './update-test/update-test.component';


const routes: Routes = [
  {path: '',redirectTo:'test',pathMatch:'full'},
  {path:'mytest', component: MytestComponent},
  {path:'add', component: CreateTestComponent},
  {path:'detail/:id', component: TestDetailsComponent},
  {path: 'update/:id',component: UpdateTestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
