import { FC, useState } from "react";
import { IMeal, MealModel } from "../infrastructure/interfaces/IMeal";
import Image from "next/image";
import styles from "../styles/meal.module.css";
import { ImageHelper } from "../infrastructure/helpers/image_helper";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { motion } from "framer-motion";
import BottomSheet from "../components/bottom_sheet";
import MealSheet from "../components/meal_sheet";
import { isEn } from "../infrastructure/helpers/lang_helper";

interface IProps {
  meal: MealModel;
}

const Meal: FC<IProps> = ({ meal }) => {
  const [IsOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <motion.div
        whileTap={{ scale: 1.1 }}
        className={styles.container}
        onClick={() => setIsOpen(!IsOpen)}
      >
        <div className={styles.timingBox}>
          <AccessTimeFilledIcon />
          <h5>{meal.hoursToOrder} min</h5>
        </div>
        <motion.div
          drag
          dragConstraints={{
            top: 10,
            left: 10,
            right: 10,
            bottom: 10,
          }}
          className={styles.imageBox}
        >
          <Image
            layout="fill"
            src={ImageHelper.getImageUrl(meal.topImageUrl)}
            alt={"pic"}
          />
        </motion.div>
        <div className={styles.column}>
          <h3>{isEn() ? meal.nameEn : meal.nameAr}</h3>
          <p>{isEn() ? meal.smallDescriptionEn : meal.smallDescriptionAr}</p>
          <h4>{meal.price} OMR</h4>
        </div>
      </motion.div>
      <BottomSheet isOpen={IsOpen} onChange={setIsOpen} disableSwipe={false}>
        <MealSheet meal={meal} />
      </BottomSheet>
    </>
  );
};

export default Meal;
