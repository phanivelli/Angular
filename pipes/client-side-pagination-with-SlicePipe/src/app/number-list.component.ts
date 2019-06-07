import { Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './number-list.component.html',
    styleUrls: ['./number-list.component.css']
})
export class NumberListComponent  {
    numbers: number[] = [];
    start =1;
    end =11;
    pageSize = 10;
    constructor(){
        for (let i = 0; i < 100; i++) {
            this.numbers.push(i);
        }
    }

    toValue(input:string ,defValue){
        var value = parseInt(input);
        if (isNaN(value)) {
            return defValue;
        }else{
            return value;
        }
    }

    previous(){
        this.start = this.start - this.pageSize;
        this.end =this.end -this.pageSize;
    }
    next(){
        this.start = this.start + this.pageSize;
        this.end = this.end + this.pageSize;
    }
}
