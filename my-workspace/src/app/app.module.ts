import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {App} from './app';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [BrowserModule, RouterModule.forRoot([])],
  declarations: [App],
  bootstrap: [App],
})
export class AppModule {}
