import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/api/data.service';
import { Report } from '../../models/report.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
  id: string | null = '';
  reports:Report[]=[];
  constructor(private dataService: DataService,private router: Router,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getAllReportByCategory();
  }

  getAllReportByCategory(){
    this.dataService.getReportsByCategory(2).subscribe((data) => {
      this.reports = data;
    });
  }

  gotoReport(reoprtId:number) {
    console.log(reoprtId);
    this.router.navigate(['report'], {
      state: {
        reoprtId: reoprtId,
      },
    });
  }

}
