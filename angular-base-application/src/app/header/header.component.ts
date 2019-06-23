import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
   
})
export class HeaderComponent implements OnInit {
    loginStatus = true;

    handleLogin(){
        console.log("user has been logged in");
        this.loginStatus = true;
    }

    handleLogout(){
        console.log("user has logged out");
        this.loginStatus = false;
        
    }
}
