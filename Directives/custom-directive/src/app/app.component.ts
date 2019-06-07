import { Component } from '@angular/core';

@Component({
    moduleId:module.id,
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent  {
    users;

    constructor() { 
        this.users =["s1","s2","s3"];
    }

}
