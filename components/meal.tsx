import { FC, useState } from "react";
import { MealModel } from "../infrastructure/interfaces/IMeal";
import Image from "next/image";
import styles from "../styles/meal.module.css";
import { ImageHelper } from "../infrastructure/helpers/image_helper";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { motion } from "framer-motion";
import BottomSheet from "../components/bottom_sheet";
import MealSheet from "../components/meal_sheet";
import { getDirection, isEn } from "../infrastructure/helpers/lang_helper";

interface IProps {
  meal: MealModel;
}

const Meal: FC<IProps> = ({ meal }) => {
  const [IsOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <motion.div
        whileTap={{ scale: 1.1 }}
        className={isEn() ? styles.container : styles.containerAR}
        onClick={() => setIsOpen(!IsOpen)}
      >
        <div className={isEn() ? styles.timingBox : styles.timingBoxAR}>
          <AccessTimeFilledIcon />
          <h5>{meal.minsToOrder} min</h5>
        </div>
        <div className={isEn() ? styles.imageBox : styles.imageBoxAR}>
          <Image
            layout="fill"
            src={ImageHelper.getImageUrl(meal.topImageUrl!)}
            alt={"pic"}
          />
        </div>
        <div dir={getDirection()} className={styles.column}>
          <h3>{isEn() ? meal.nameEn : meal.nameAr}</h3>
          {isEn()
            ? meal
                .smallDescriptionEn!.split(/[;]+/)
                .map((line) => <p key={line}>{line}</p>)
            : meal
                .smallDescriptionAr!.split(/[;]+/)
                .map((line) => <p key={line}>{line}</p>)}
          <h4>{meal.price} OMR</h4>
        </div>
      </motion.div>
      <BottomSheet isOpen={IsOpen} onChange={setIsOpen} disableSwipe={false}>
        <MealSheet meal={meal} />
      </BottomSheet>
    </div>
  );
};

export default Meal;
