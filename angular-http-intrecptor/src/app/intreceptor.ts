import { Injectable } from '@angular/core';
import { tap } from "rxjs/operators";
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { error } from 'selenium-webdriver';

@Injectable()
export class MyInterceptor implements HttpInterceptor {

    constructor(){}
    intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>{
        // return next.handle(req);

        const updateRequest = req.clone({
            headers: req.headers.set('Authorization',"Dummy code")
        });

        console.log('Before making api call', updateRequest);

        return next.handle(req).pipe(
            tap(
                event => {
                    if(event instanceof HttpResponse){
                        console.log('api call success',event);
                        
                    }
                },error => {
                    if (event instanceof HttpResponse) {
                        console.log('api error call ',error);
                        
                    }
                }
            )
        );
        
    }

    
}

