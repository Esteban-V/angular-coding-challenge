import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiProvider } from './core/providers/server';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table/table-row/table-row.component';
import { ToastNoAnimationModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    TableRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastNoAnimationModule.forRoot(),
  ],
  exports: [BrowserModule],
  providers: [ApiProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
