import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Students } from '../model/students';
import { StudentService } from '../service/student.service';
import {first} from "rxjs/operators";

@Component({
    selector: 'student-edit',
    templateUrl: './student-edit.component.html',
    // styleUrls: ['./name.component.scss']
})
export class EditStudentComponent implements OnInit {
    student: Students;
    editForm: FormGroup;
    constructor(private studentService:StudentService,private router:Router,private formBuilder:FormBuilder) { }

    ngOnInit(){
        let studentId = window.localStorage.getItem("editStudentsId");
        if(!studentId) {
            alert("Invalid action.")
            this.router.navigate(['student-list']);
            return;
        }

        this.editForm = this.formBuilder.group({
            id:[],
            name: [],
            email: [],
            mobile: []
         });

    //    this.editForm = new FormGroup({
    //         'id': new FormControl(''),
    //         'name': new FormControl(''),
    //         'email': new FormControl(''),
    //         'mobile': new FormControl('')
    //     })

         this.studentService.getUserById(+studentId)
         .subscribe(
             data => {
                 this.editForm.setValue(data);
             }
         );
    }


    // .pipe(first())
    onSubmit(){
        this.studentService.editStudent(this.editForm.value)
        .subscribe(
            data => {
                this.router.navigate(['student-list']);
            },
            error => {
                alert(error);
            }
        )
    }
}

     
