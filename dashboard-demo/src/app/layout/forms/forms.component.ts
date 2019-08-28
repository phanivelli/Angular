import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-forms',
    templateUrl: 'forms.component.html',
    animations: [routerTransition()]

})

export class FormsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}