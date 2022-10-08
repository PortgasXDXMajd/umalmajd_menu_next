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
  minsToOrder: number;
  topImageUrl: string;
  imageUrl: string;
  categoryId: string;
}

export class MealModel {
  id: string;
  nameEn: string | null;
  nameAr: string | null;
  smallDescriptionEn: string | null;
  smallDescriptionAr: string | null;
  descriptionEn: string | null;
  descriptionAr: string | null;
  price: number | null;
  minsToOrder: number | null;
  topImageUrl: string | null;
  imageUrl: string | null;
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
    this.minsToOrder = data.minsToOrder;
    this.topImageUrl = data.topImageUrl;
    this.imageUrl = data.imageUrl;
    this.categoryId = data.categoryId;
  }
}
