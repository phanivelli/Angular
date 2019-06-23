import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Students } from '../model/students';

@Injectable()
export class StudentService {
    constructor(private http:HttpClient){}

    getUserById(id: number) {
        return this.http.get<Students>('http://localhost:2019/student-crud-application/getStudentsDetailsById'+'/'+id);
      }

    addStudents(student:Students){
        return this.http.post('http://localhost:2019/student-crud-application/addUser',student)
    }

    getStudents(){
        return this.http.get<Students[]>('http://localhost:2019/student-crud-application/listStudents')
    }

    editStudent(student:Students){
        return this.http.put('http://localhost:2019/student-crud-application/editStudents'+'/'+student.id,student)
    }

    deleteStudents(id: number) {
        return this.http.delete('http://localhost:2019/student-crud-application/deleteStudents'+'/'+id);
      }
}