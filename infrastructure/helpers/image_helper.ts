import { url } from "inspector";

export class ImageHelper {
  static getImageUrl(imageUrl: String) {
    let url = imageUrl.replaceAll("~", "");
    url = "https://admin.umalmajd.com" + url;
    return url;
  }
}
