import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StudentRegComponent } from './student-reg.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent,StudentRegComponent ],
    imports: [ BrowserModule ,ReactiveFormsModule],
    exports: [],
    providers: [],
    bootstrap:[AppComponent]
})
export class AppModule {}