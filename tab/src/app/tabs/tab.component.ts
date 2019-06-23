import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'tab',
    templateUrl: './tab.component.html',
})
export class TabComponent  {
    @Input('tabTitle') title: string;
    @Input() active = false;
}
