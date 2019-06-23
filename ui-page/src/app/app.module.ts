import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  AppLayoutComponent } from './app-layout/app-layout.component';
import { FooterSecComponent } from './footer-sec/footer-sec.component';
import { HeaderSecComponent } from './header-sec/header-sec.component';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent,AppLayoutComponent,FooterSecComponent,HeaderSecComponent],
    imports: [ BrowserModule ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}