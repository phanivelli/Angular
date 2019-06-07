import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<h1>{{message}}</h1>
    <input type="text" value="{{message}}"/>`
        
})
export class AppComponent {
    message: string = "angular - interpolation example"
}
