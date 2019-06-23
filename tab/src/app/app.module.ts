import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TabComponent } from './tabs/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { SidenavBarComponent } from './sidenavbar/sidenavbar.component';


@NgModule({
    declarations: [AppComponent,TabComponent,TabsComponent,SidenavBarComponent],
    imports: [ BrowserModule,FormsModule ],
    bootstrap: [AppComponent]
})
export class AppModule {}