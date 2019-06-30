import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Students } from '../model/students';
import { StudentService } from '../service/student.service';
import {first} from "rxjs/operators";

@Component({
    selector: 'student-edit',
    templateUrl: './student-edit.component.html',
    // styleUrls: ['./name.component.scss']
})
export class EditStudentComponent implements OnInit {
    students: Students;
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
            id:[{value: studentId, disabled:true}],
            name: [''],
            email: [''],
            mobile: ['']
         });

         this.studentService.getUserById(+studentId)
         .subscribe(
             data => {
                 this.editForm.setValue(data);
             console.log(data)

             }
         );

        //  this.editForm.setValue({
        //      id : i,

        //  })


    }


    // .pipe(first())
    onSubmit(){
        // this.studentService.editStudent(this.editForm.patchValue{})
        // .pipe(first())
        // .subscribe(
        //     data => {
        //         this.students=data;
        //         console.log(data);
                
        //         this.router.navigate(['student-list']);
        //     },
        //     error => {
        //         alert(error);
        //     }
        // )

        this.studentService.editStudent(this.editForm.value)
        .pipe(first())
        .subscribe(
            data => {
                this.students =data
            this.router.navigate(['student-list']);
            }
        )
    }
}

     
