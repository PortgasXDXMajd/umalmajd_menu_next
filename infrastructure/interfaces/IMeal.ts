import { isEn } from "../helpers/lang_helper";

export interface IMeal {
  id: string;
  nameEn: string;
  nameAr: string;
  smallDescriptionEn: string;
  smallDescriptionAr: string;
  descriptionEn: string;
  descriptionAr: string;
  price: number;
  hoursToOrder: number;
  topImageUrl: string;
  imageUrl: string;
  categoryId: string;
}

export class MealModel {
  id: string;
  nameEn: string;
  nameAr: string;
  smallDescriptionEn: string;
  smallDescriptionAr: string;
  descriptionEn: string;
  descriptionAr: string;
  price: number;
  hoursToOrder: number;
  topImageUrl: string;
  imageUrl: string;
  categoryId: string;

  constructor(data: IMeal) {
    this.id = data.id;
    this.nameEn = data.nameEn;
    this.nameAr = data.nameAr;
    this.smallDescriptionEn = data.smallDescriptionEn;
    this.descriptionEn = data.descriptionEn;
    this.smallDescriptionAr = data.smallDescriptionAr;
    this.descriptionAr = data.descriptionAr;
    this.price = data.price;
    this.hoursToOrder = data.hoursToOrder;
    this.topImageUrl = data.topImageUrl;
    this.imageUrl = data.imageUrl;
    this.categoryId = data.categoryId;
  }
}
