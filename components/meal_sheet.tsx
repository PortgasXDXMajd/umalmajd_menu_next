import { FC } from "react";
import Image from "next/image";
import styles from "../styles/mealSheet.module.css";
import { MealModel } from "../infrastructure/interfaces/IMeal";
import { ImageHelper } from "../infrastructure/helpers/image_helper";
import { getDirection, isEn } from "../infrastructure/helpers/lang_helper";

interface IProps {
  meal: MealModel;
}

const MealSheet: FC<IProps> = ({ meal }) => {
  return (
    <div className={styles.container}>
      <Image
        layout="responsive"
        width={100}
        height={50}
        src={ImageHelper.getImageUrl(meal.imageUrl!)}
        alt={"pic"}
      />
      <div dir={getDirection()} className={styles.column}>
        <h3>{isEn() ? meal.nameEn : meal.nameAr}</h3>
        <p>{isEn() ? meal.descriptionEn : meal.descriptionAr}</p>
      </div>
    </div>
  );
};

export default MealSheet;
