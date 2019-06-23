import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
import { StudentService } from '../service/student.service';


@Component({
    selector: 'student-form',
    templateUrl: './student-form.component.html',
    // styleUrls: ['./name.component.scss']
})
export class StudentFormComponent implements OnInit {
    
    constructor(private formBuilder: FormBuilder,private studentService:StudentService ,private router: Router) { }
    addForm : FormGroup;
    ngOnInit()  {
        this.addForm = this.formBuilder.group({
            name:[],
            email:[],
            mobile:[]
        });
     }
     onSubmit(){
         this.studentService.addStudents(this.addForm.value).subscribe(
             data => {
                 this.router.navigate(['student-list']);
             }
             
         )
     }
}
