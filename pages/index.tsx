import styles from "../styles/index.module.css";
import Image from "next/image";
import logo from "../public/logo.jpeg";
import { useRouter } from "next/router";
import Stack from "@mui/material/Stack";
import i18next from "i18next";
import { useState } from "react";
import { GetServerSideProps } from "next";
import { NextPage } from "next";
import { ICategory } from "../infrastructure/interfaces/ICategory";
import { isEn } from "../infrastructure/helpers/lang_helper";

i18next.init({
  lng: "en",
  debug: true,
  resources: {
    en: {
      translation: {
        key: "hello world",
        view_menu: "View Menu",
        title: "Um Al Majd Kitchen",
        subTitle: "Syrian Kitchen",
      },
    },
    ar: {
      translation: {
        key: "مرحبا",
        view_menu: "عرض قائمة الطعام",
        title: "مطبخ أم المجد",
        subTitle: "المطبخ السوري",
      },
    },
  },
});

interface IProps {
  data: ICategory[];
}

const IndexPage: NextPage<IProps> = ({ data }) => {
  const router = useRouter();
  const [lang, setlang] = useState<string>("en");

  const handleViewMenu = () => {
    router.push("/home");
  };
  const handleLang = () => {
    console.log(i18next.language);
    if (i18next.language == "en") {
      i18next.changeLanguage("ar");
      setlang("ar");
    } else {
      i18next.changeLanguage("en");
      setlang("en");
    }
  };

  return (
    <Stack>
      <div className={styles.container}>
        <div className={styles.upperContainer}></div>
        <Image
          className={styles.logo}
          height={250}
          width={250}
          src={logo}
          alt="logo"
        />
        <div className={styles.bottomContainer}></div>
      </div>
      <button className={styles.botton} onClick={handleViewMenu}>
        <p className={styles.bottonLabel}>
          <>{i18next.t("view_menu")}</>
        </p>
      </button>
      <div className={styles.title}>
        <p>
          <>
            {i18next.t("title")}
            <br />
            <span>
              <>{i18next.t("subTitle")}</>
            </span>
          </>
        </p>
      </div>
      <button className={styles.langBotton} onClick={handleLang}>
        <p className={styles.langBottonLabel}>{isEn() ? `ع` : `EN`}</p>
      </button>
    </Stack>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`https://admin.umalmajd.com/api/menu`);
  const data = await res.json();
  return { props: { data } };
};
