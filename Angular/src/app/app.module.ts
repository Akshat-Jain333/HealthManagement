import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import{ FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { approutes } from './routerConfig';
import { CreateTestComponent } from './create-test/create-test.component';
import { MytestComponent } from './mytest/mytest.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { UpdateTestComponent } from './update-test/update-test.component';

@NgModule({
  declarations: [
    CreateTestComponent,
    MytestComponent,
    TestDetailsComponent,
    UpdateTestComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(approutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
