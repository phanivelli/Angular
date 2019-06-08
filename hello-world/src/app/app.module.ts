import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterSectionComponent } from './footer/footer-sec.componet';
import { HeaderSectionComponent } from './header/header-sec.component';
import { SideNavComponent } from './sidenav/side-nav.component';
import { ContentSectionComponent } from './contentsec/content-sec.component';
import { HomeComponent } from './app.component';

@NgModule({
    declarations: [HomeComponent,HeaderSectionComponent,SideNavComponent,ContentSectionComponent,FooterSectionComponent],
    imports: [ BrowserModule ],
    bootstrap:[HomeComponent]
    
})
export class AppModule {}