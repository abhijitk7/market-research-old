import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  navLinks: any[] = [
    {
      displayText: "Home",
      link: "home",
    },
    {
      displayText: "About",
      link: "#about",
    },
    {
      displayText: "Reports",
      link: "#reports",
    },
    {
      displayText: "Contact",
      link: "#contact",
    },
    {
      displayText: "Get Started",
      link: "#about",
    },
  ]

  constructor() {}

  ngOnInit(): void {
    console.log("Header component ")
  }
}
