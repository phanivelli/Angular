import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class CitysService {
    constructor(private http : Http){}

    getCitys(){
        return this.http.get('http://localhost:2019/ArrCitys/citys')
        .map(res => res.text())
    }
}