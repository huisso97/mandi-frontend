import { AnimationEvent, useEffect, useRef, useState } from "react";

import classNames from "classnames/bind";

import Check from "@/assets/icon/icon-check-circle.svg";
import Alert from "@/assets/icon/icon-exclamation-circle.svg";
import { Snackbar } from "@/hooks/useSnackbar";

import styles from "./SnackbarItem.module.scss";

const cx = classNames.bind(styles);

export const SnackbarItem = ({
  status,
  setStatus,
  content,
  position,
  type,
  full,
}: Snackbar) => {
  const elemRef = useRef<HTMLDivElement>(null);
  const [animationClassName, setAnimationClassName] = useState<string[]>([]);

  // console.log(status);
  console.log(animationClassName);
  const handleAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (elemRef.current?.className.includes("enter") && status === "open") {
      setAnimationClassName(["show"]);
    } else {
      setStatus(null);
    }
    // enter => show => show exit
  };

  useEffect(() => {
    setAnimationClassName(status === "open" ? ["enter"] : ["show", "exit"]);
  }, [status]);

  return (
    <div
      ref={elemRef}
      className={cx("snackbar_item", animationClassName, {
        full,
        center: position === "center",
        bottom: position === "bottom",
      })}
      onAnimationEnd={handleAnimationEnd}
    >
      {type === "alert" && <Alert className={cx("alert")} />}
      {type === "check" && <Check className={cx("check")} />}
      <span>{content}</span>
    </div>
  );
};