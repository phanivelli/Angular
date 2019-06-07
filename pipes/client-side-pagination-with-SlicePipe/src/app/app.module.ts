import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NumberListComponent } from './number-list.component';
@NgModule({
    declarations: [NumberListComponent],
    imports: [ BrowserModule ],
    bootstrap: [NumberListComponent]
})
export class AppModule {}