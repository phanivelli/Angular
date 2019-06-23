import { Component, OnInit } from '@angular/core';
import { UserService } from '../userservice/userservice';

@Component({
    selector: 'services',
    templateUrl: './services.component.html',
    providers: [UserService]
})
export class ServicesComponent implements OnInit {
    constructor(private userSerivce: UserService){
        this.userSerivce = userSerivce;
    }
    userList = this.userSerivce.getUserData();
}
