import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';   // ✅ Import this
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]) // ✅ Add this line for basic setup
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
