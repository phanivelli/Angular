import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "../_services/user.service";
import { User } from "../_models/index";
import { AuthenticationService } from "../_services";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss", "./header.component.css"],
})
export class HeaderComponent implements OnInit {
  currentUser: User;

  returnUrl: string;
  users: User[] = [];

  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute
  ) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  ngOnInit() {
    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }
}
