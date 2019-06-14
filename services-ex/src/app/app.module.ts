import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CitysService } from './city.service';

@NgModule({
    declarations: [AppComponent],
    imports: [ BrowserModule,HttpModule ],
    exports: [],
    providers: [CitysService],
    bootstrap:[AppComponent]
})
export class AppModule {}