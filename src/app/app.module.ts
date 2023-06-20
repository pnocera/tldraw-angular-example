import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactComponentDirective } from './directives/reactng';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ReactComponentDirective],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
