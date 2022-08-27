import { FC } from "react";
import { ICategory } from "../infrastructure/interfaces/ICategory";
import styles from "../styles/categorySection.module.css";
import Meal from "./meal";

interface IProps {
  category: ICategory;
}

const CategorySection: FC<IProps> = ({ category }) => {
  return (
    <div className={styles.container}>
      <h2>{category.nameEn}</h2>
      {category.meals.map((meal) => (
        <Meal key={meal.id} meal={meal} />
      ))}
    </div>
  );
};

export default CategorySection;
