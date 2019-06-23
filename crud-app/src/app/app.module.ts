import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

import { StudentFormComponent } from './student-add/student-form.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentListComponent } from './student-display/student-list.component';
import { routing } from './app.routing';
import { StudentService } from './service/student.service';
import { EditStudentComponent } from './student-edit/student-edit.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent,
    StudentListComponent,
    EditStudentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    routing,
    
  ],
  providers: [StudentService],
  bootstrap: [AppComponent],

})
export class AppModule { }
