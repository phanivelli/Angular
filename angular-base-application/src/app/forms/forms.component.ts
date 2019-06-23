import { Component, OnInit } from '@angular/core';
import { FormsModule,FormControl, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
    selector: 'forms',
    templateUrl: './form.component.html',
   
})
export class UserFormComponent implements OnInit {
    constructor(private http:Http) { }

    userName = new FormControl('Phani');
    formData;
    handleFormSubmit (userDetails) {
        console.log('Template Driven data', userDetails);
    }
    ngOnInit (){
        this.http.get("http://jsonplaceholder.typicode.com/users").
        map((response) => response.json()).
        subscribe((data) => {
            console.log(data)
        });

        this.formData = new FormGroup({
            userId: new FormControl("123"),
            userName: new FormControl("Phani")
        });
    }
    handleOnSubmit (userDetails){
        console.log('Modal Driven Data..', userDetails);
    }

    handleRegistrationSubmit (registrationDetails) {
        console.log('registrationDetails>>', registrationDetails);
    }

}
