import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { CitysService } from './city.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent  {
    citysName={};
    constructor(private cityService:CitysService){

    }
    onLoads(){
        this.cityService.getCitys().subscribe(data => {
            console.log(data);
            this.citysName = data

        });
    }
    
}
