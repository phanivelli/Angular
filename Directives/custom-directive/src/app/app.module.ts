import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HighLightDirective } from './app.directive';

@NgModule({
    declarations: [AppComponent,HighLightDirective],
    imports: [ BrowserModule ],
    bootstrap:[AppComponent]
})
export class AppModule {}