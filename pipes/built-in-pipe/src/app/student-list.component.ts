import { Component} from '@angular/core';
import { Student } from './student';

@Component({
    selector: 'student-list-view',
    templateUrl: './student-list.component.html',
})
export class StudentListComponent  {
    user = {'currancyFormat' : 'INR','dataFormat':'dd/MM/YYYY'};
    students = Student.students;
}
