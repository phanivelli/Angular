import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from './app.component';

@NgModule({
    declarations: [HelloComponent],
    imports: [ BrowserModule ],
    exports: [],
    providers: [],
    bootstrap: [HelloComponent]
})
export class AppModule {}