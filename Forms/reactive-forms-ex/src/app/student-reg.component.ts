import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Student } from './student';

@Component({
    selector: 'student-reg',
    templateUrl: './student-reg.component.html',
})
export class StudentRegComponent implements OnInit {
    student : Student;
    studentForm : FormGroup;
    constructor() { }

    ngOnInit(){
        this.studentForm = new FormGroup({
            id: new FormControl('',[]),
            name: new FormControl('',[])
        });
    }
    register(){
        console.log(this.student);
        
    }
   
}
