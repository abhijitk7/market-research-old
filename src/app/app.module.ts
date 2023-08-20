import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { ContentComponent } from "./components/content/content.component"
import { ContactComponent } from "./components/content/contact/contact.component"
import { ReactiveFormsModule } from "@angular/forms"
import { HeaderComponent } from "./components/header/header.component"
import { ToastComponent } from "./components/toast/toast.component"
import { ToasterComponent } from "./components/toaster/toaster.component"
import { NgxCaptchaModule } from "ngx-captcha"
import { ReportsComponent } from "./components/reports/reports.component"
import { FooterComponent } from "./components/footer/footer.component"
import { HttpClientModule } from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ContactComponent,
    ToastComponent,
    ToasterComponent,
    ReportsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
