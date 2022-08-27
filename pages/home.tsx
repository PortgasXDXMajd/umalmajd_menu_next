import { NextPage } from "next";
import SearchBar from "../components/search_bar";
import styles from "../styles/home.module.css";
import { GetServerSideProps } from "next";
import { ICategory } from "../infrastructure/interfaces/ICategory";
import CategorySection from "../components/category_section";
import { IMeal, MealModel } from "../infrastructure/interfaces/IMeal";
import { useState } from "react";
import Meal from "../components/meal";
import { motion, useScroll, useSpring } from "framer-motion";
import { getDirection, isEn } from "../infrastructure/helpers/lang_helper";

interface IProps {
  data: ICategory[];
}

const Home: NextPage<IProps> = ({ data }) => {
  const [filteredList, setFilteredList] = useState<IMeal[]>([]);
  const [lang, setLang] = useState<string>("");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handelSearch = (s: string) => {
    if (s === "") {
      setFilteredList([]);
      return;
    }
    let newList: IMeal[] = [];
    data.forEach((cat) => {
      cat.meals.forEach((meal) => {
        if (
          meal.nameEn.toLowerCase().includes(s) ||
          meal.nameAr.toLowerCase().includes(s)
        ) {
          if (!filteredList.includes(meal)) {
            newList = newList.concat(meal);
          }
        }
      });
    });
    setFilteredList(newList);
    return;
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={styles.progressBar}
        style={{ scaleX }}
      />
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <SearchBar
            onChange={handelSearch}
            onUpdate={() => setLang(isEn().toString())}
          />
          {filteredList.length <= 0 ? (
            data.map((cat) => <CategorySection key={cat.id} category={cat} />)
          ) : (
            <motion.div
              dir={getDirection()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={styles.searchContainer}
            >
              <h5 className={styles.searchedTitle}>
                We found {filteredList.length}
                {filteredList.length > 1 ? ` results` : ` result`}
              </h5>
              <br />
              <br />
              {filteredList.map((meal) => (
                <Meal key={meal.id} meal={new MealModel(meal)} />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`https://admin.umalmajd.com/api/menu`);
  const data = await res.json();
  return { props: { data } };
};
