import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list.component';

@NgModule({
    declarations: [StudentListComponent,AppComponent],
    imports: [ BrowserModule ],
    bootstrap:[AppComponent]
})
export class AppModule {}