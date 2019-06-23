import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sidenavbar',
    templateUrl: './sidenavbar.component.html',
    styleUrls: ['./sidenavbar.component.css']
})
export class SidenavBarComponent implements OnInit {
    sidenavbars :string[] = ["Buttons","Tabs","Spinners"];


    ngOnInit(): void { }
}
