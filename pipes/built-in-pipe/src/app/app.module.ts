import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list.component';

@NgModule({
    declarations: [AppComponent,StudentListComponent],
    imports: [ BrowserModule ],
    exports: [],
    providers: [],
    bootstrap:[AppComponent]
})
export class AppModule {}