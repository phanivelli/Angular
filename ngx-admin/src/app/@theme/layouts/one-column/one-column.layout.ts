import { Component } from "@angular/core";
import { MENU_ITEMS } from "./../../../pages/pages-menu";
import { HEADER_MENU_ITEMS } from "./../../../pages/header-pages-menu";

@Component({
  selector: "ngx-one-column-layout",
  styleUrls: ["./one-column.layout.scss"],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <div>
          <button nbButton status="primary" *ngFor="let item of menu">
            {{ item.title }}
          </button>
        </div>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class OneColumnLayoutComponent {
  menu = HEADER_MENU_ITEMS;
}
