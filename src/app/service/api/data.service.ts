import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../constants/constants';
import { Category } from '../../models/category.model';
import { Report } from '../../models/report.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getAllCategories(){
    return this.http.get<Category[]>(`${API_URL}/api/categories`);
  }

  getReportsByCategory(categoryId:number) {
    return this.http.get<Report[]>(`${API_URL}/api/reports/category/`+categoryId);
  }

  getReportByReportId(reportId:number) {
    return this.http.get<Report[]>(`${API_URL}/api/reports/`+reportId);
  }

}
