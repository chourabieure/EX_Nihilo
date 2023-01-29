import { useState, useEffect, ReactNode } from "react";
import styles from "./Layout.module.css";
import React from "react";

const TransitionLayout = ({ children }) => {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeOut");
  useEffect(() => {
    setTransitionStage("fadeIn");
  }, []);

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage("fadeOut");
  }, [children, setDisplayChildren, displayChildren]);

  return (
    // <main
    //   onTransitionEnd={() => {
    //     if (transitionStage === "fadeOut") {
    //       setDisplayChildren(children);
    //       setTransitionStage("fadeIn");
    //     }
    //   }}
    //   className={`${styles.content} ${styles[transitionStage]} relative`}
    // >
    //   {displayChildren}
    // </main>

    <main>{children}</main>
  );
};

export default TransitionLayout;
