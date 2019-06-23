import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'basic-ex',
    templateUrl: './basic-ex.component.html',
   
})
export class BasicExComponent {
    title = 'angular 2 hello world app';
	userName = 'Phani';
	userId=1;

	onGetAppNameClicked(appName : string){
		this.title = appName;
	}
 
    menuLinks = ['Home', 'Contact', 'About'];
    showLinks = false;

    toogleLinks() {
        this.showLinks = !this.showLinks;
    }
}
