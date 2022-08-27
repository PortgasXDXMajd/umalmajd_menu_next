import { FC, memo, ReactElement } from "react";
import SwipeableBottomSheet from "@sergeymyssak/swipeable-bottom-sheet";
import "@sergeymyssak/swipeable-bottom-sheet/lib/min.css";
import styles from "../styles/myBottom.module.css";
import { IMeal } from "../infrastructure/interfaces/IMeal";

interface IProps {
  isOpen: boolean;
  disableSwipe: boolean;
  onChange: (state: boolean) => void;
  children: ReactElement;
}

const BottomSheet: FC<IProps> = ({
  isOpen,
  disableSwipe = false,
  onChange,
  children,
}) => (
  <SwipeableBottomSheet
    isOpen={isOpen}
    onChange={onChange}
    swipeableViewsProps={{ disabled: disableSwipe }}
    containerClassName={styles.container}
    bodyClassName={styles.body}
    isScrollTopOnClose={true}
  >
    {children}
  </SwipeableBottomSheet>
);

export default memo(BottomSheet);
