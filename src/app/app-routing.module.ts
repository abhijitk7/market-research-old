import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ContentComponent } from "./components/content/content.component"
import { ReportsComponent } from "./components/reports/reports.component"
import { ReportListComponent } from "./components/report-list/report-list.component"

const routes: Routes = [
  {
    path: "",
    component: ContentComponent,
  },
  {
    path: "home",
    component: ContentComponent,
  },
  {
    path: "report/:id",
    component: ReportsComponent,
  },
  {
    path: "list/:id",
    component: ReportListComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
