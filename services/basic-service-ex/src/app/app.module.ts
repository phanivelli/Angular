import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StudentService } from './student.service';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [ BrowserModule ],
    bootstrap: [AppComponent],
    providers: [StudentService],
})
export class AppModule {}