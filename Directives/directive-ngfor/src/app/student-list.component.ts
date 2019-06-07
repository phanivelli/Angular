import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
    selector: 'student-list',
    templateUrl: './student-list.component.html',
})
export class StudentListComponent  {
    students: Student[];
    constructor() { 
        this.students = [ new Student(1,"Student1"),new Student(2,"student2")];
     }

    ngOnInit(): void { }
}
