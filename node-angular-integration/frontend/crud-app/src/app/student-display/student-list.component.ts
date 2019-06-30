import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Students } from '../model/students';
import { StudentService } from '../service/student.service';
;

@Component({
    selector: 'student-list',
    templateUrl: './student-list.component.html',
    // styleUrls: ['./name.component.scss']
})
export class StudentListComponent implements OnInit {
    students : any =[];
    constructor(private studentService: StudentService,private route:Router) { }

    ngOnInit()  { 
        this.studentService.getStudents()
        .subscribe(
            data => {
                this.students = data;
                console.log(data);
                
            }
        )
    }
    
    addStudent(){
        this.route.navigate(['student-form']);
    }

    deleteStudent(student: Students){
        this.studentService.deleteStudents(student.id)
          .subscribe( data => {
            this.students = this.students.filter(u => u !== student);
          })
      };
    
      editStudent(students: Students,i) {
        localStorage.removeItem("editStudentsId");
        localStorage.setItem("editStudentsId", students.id.toString());

        this.route.navigate(['student-edit']);
      };
}
