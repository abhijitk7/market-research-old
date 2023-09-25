import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-reports",
  templateUrl: "./reports.component.html",
  styleUrls: ["./reports.component.css"],
})
export class ReportsComponent implements OnInit {

  reportId:string='';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    //this.reportId = this.route.snapshot.paramMap.get('id')!;
    //console.log("********** "+this.reportId);
     this.route.paramMap.subscribe((params) => {
      this.reportId = params.get('reportId')!;
      console.log("********** "+this.reportId)
    });
  }
}
