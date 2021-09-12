import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressbarComponent } from './pages/progressbar/progressbar.component';
import { DatatableComponent } from './pages/datatable/datatable.component';
import { FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    ProgressbarComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatProgressBarModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
