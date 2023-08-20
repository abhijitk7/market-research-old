import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ContentComponent } from "./components/content/content.component"
import { ReportsComponent } from "./components/reports/reports.component"

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
    path: "reports",
    component: ReportsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
