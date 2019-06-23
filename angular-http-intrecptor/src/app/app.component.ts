import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-http-intrecptor';

  constructor(private http:HttpClient){
    this.http.get('https://api.myjson.com/bins/7xq2x').subscribe(()=>{
      console.log('Http call success');
      
    },error=>{
      console.log('http call failed');
      
    })
  }


}
