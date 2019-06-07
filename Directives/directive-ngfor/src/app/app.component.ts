import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent  {
    constructor() { 
        this.message ="Student List";
     }
    message : string;
}
