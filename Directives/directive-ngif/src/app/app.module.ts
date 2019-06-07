import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent],
    imports: [ 
        BrowserModule,
        FormsModule,
        HttpModule

     ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}