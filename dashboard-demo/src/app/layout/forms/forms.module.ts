import { NgModule } from '@angular/core';
import { FormsComponent } from './forms.component';
import { CommonModule } from '@angular/common';
import { FormRoutingModule } from './form-routing.module';
import { PageHeaderModule } from '../shared/modules/page-header/page-header.module';


@NgModule({
    imports: [CommonModule,FormRoutingModule,PageHeaderModule],
    exports: [],
    declarations: [FormsComponent],
    providers: [],
})
export class FormsModule { }
