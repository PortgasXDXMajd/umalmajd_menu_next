import i18next from "i18next";
import { FC, useState } from "react";
import { isEn } from "../infrastructure/helpers/lang_helper";
import styles from "../styles/searchBar.module.css";

interface IProps {
  onChange: Function;
  onUpdate: Function;
}

const SearchBar: FC<IProps> = ({ onChange, onUpdate }) => {
  const [lang, setlang] = useState<string>("en");

  const handleLang = () => {
    console.log(i18next.language);
    if (i18next.language == "en") {
      i18next.changeLanguage("ar");
      setlang("ar");
    } else {
      i18next.changeLanguage("en");
      setlang("en");
    }
    onUpdate();
  };

  return (
    <div className={styles.row}>
      <div className={styles.container}>
        <input
          placeholder={"search..."}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
      <button className={styles.langBotton} onClick={handleLang}>
        <p className={styles.langBottonLabel}>{isEn() ? `ع` : `EN`}</p>
      </button>
    </div>
  );
};

export default SearchBar;
