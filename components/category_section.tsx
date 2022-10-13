import { FC } from "react";
import { getDirection, isEn } from "../infrastructure/helpers/lang_helper";
import { ICategory } from "../infrastructure/interfaces/ICategory";
import { makeid } from "../pages/home";
import styles from "../styles/categorySection.module.css";
import Meal from "./meal";

interface IProps {
  category: ICategory;
}

const CategorySection: FC<IProps> = ({ category }) => {
  return (
    <div className={isEn() ? styles.container : styles.containerAR}>
      <h2 dir={getDirection()}>{isEn() ? category.nameEn : category.nameAr}</h2>
      {category.meals.map((meal) => (
        <Meal key={makeid()} meal={meal} />
      ))}
    </div>
  );
};

export default CategorySection;
