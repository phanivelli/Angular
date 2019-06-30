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
        return this.http.get<Students>('http://localhost:3000/api/student?id='+id);
      }

    addStudents(student:Students){
        return this.http.post('http://localhost:3000/api/inserStudent/',student)
    }

    getStudents():Observable<Students[]>{
        return this.http.get<Students[]>('http://localhost:3000/api/students/')
        
    }

    editStudent(students : Students):Observable<any>{
        return this.http.put('http://localhost:3000/api/updateStudent?id='+students.id,students)
    }

    deleteStudents(id: number) {
        return this.http.delete('http://localhost:3000/api/delStudent?id='+id);
      }
}