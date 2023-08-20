import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup } from "@angular/forms"
import { Category } from "src/app/models/category.model";
import { DataService } from "src/app/service/api/data.service"

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"],
})
export class ContentComponent implements OnInit {
  categories:Category[]=[];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.dataService.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
