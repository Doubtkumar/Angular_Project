import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TestService } from 'src/services/test.service';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { TestComponent } from './private/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
