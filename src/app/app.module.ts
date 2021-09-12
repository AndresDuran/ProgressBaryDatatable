import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressbarComponent } from './pages/progressbar/progressbar.component';
import { DatatableComponent } from './pages/datatable/datatable.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressbarComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
