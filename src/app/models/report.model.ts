import { Category } from "./category.model"

export class Report {
  id: number = NaN

  title: string = ""

  category: Category = new Category()

  pageCount: number = NaN

  singleUserCost: number = NaN

  multiUserCost: number = NaN

  corporateUserCost: number = NaN

  dateOfPublish: Date = new Date()

  description: string = ""

  toc: string = ""

  publisher: string = ""
}
