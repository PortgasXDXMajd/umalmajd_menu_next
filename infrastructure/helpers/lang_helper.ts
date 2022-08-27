import i18next from "i18next";

export const isEn = () => {
  return i18next.language == "en";
};

export const getDirection = () => {
  if (i18next.language == "en") {
    return "ltr";
  } else {
    return "rtl";
  }
};
