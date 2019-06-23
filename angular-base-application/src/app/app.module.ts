import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { BasicExComponent } from './basicex/basic-ex.component';
import { Footer } from './footer/footer.component';
import { UserFormComponent } from './forms/forms.component';
import { ChangeTextDirective } from './directive/change-text.directive';
import { LoginStatusComponent } from './loginstatus/loginstatus.component';
import { MathCalc } from './mathlac/mathcalc.component';
import { UserService } from './userservice/userservice';
import { PipesComponent } from './pipes-ex/pipes.component';
import { ServicesComponent } from './services-ex/services.component';
import { Menu } from './menu/menu.component';
import { Sqrt } from './sqrt/sqrt.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';




const appRoutesConfig: Routes = [
    { path: 'basic-ex', component: BasicExComponent },
    { path: 'pipe-ex',      component: PipesComponent },
    { path: 'service-ex',      component: ServicesComponent },
    { path: 'forms-ex',      component: UserFormComponent },
  ];
@NgModule({
    declarations: [AppComponent,LayoutComponent,HeaderComponent,BasicExComponent,Footer,
        UserFormComponent,ChangeTextDirective,PipesComponent,ServicesComponent,Menu,
        LoginStatusComponent ,MathCalc,Sqrt
    ],
    imports: [ BrowserModule,FormsModule,ReactiveFormsModule,HttpModule,RouterModule.forRoot(appRoutesConfig) ],
    exports: [],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule {}