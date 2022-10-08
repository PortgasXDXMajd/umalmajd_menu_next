import { IMeal } from "./IMeal";

export interface ICategory {
  id: string;
  nameEn: string;
  nameAr: string;
  meals: IMeal[];
}
