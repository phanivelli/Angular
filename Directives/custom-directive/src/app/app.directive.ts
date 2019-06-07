import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[highlight]',
})
export class HighLightDirective { 
    constructor(private element:ElementRef){

    }
    setAppearance(color:string,cursor:string){
        let style = this.element.nativeElement.style;
        style.backgroundcolor = color;
        style.cursor = cursor;
    }

    @HostListener('mouseenter') onmouseenter(){
        this.setAppearance('#aaaaaa','ponter');
    }
    @HostListener('mouseleave') onmouseleave(){
        this.setAppearance(null,null);
    }

}