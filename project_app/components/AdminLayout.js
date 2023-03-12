import React from "react";
import Image from "next/image";
import styles from "../styles/AdminLayout.module.css";

export default function AdminLayout(props) {
  return (
    <div className={styles.adminLayout}>
      <Image
        src="/logo.svg"
        width={227.77}
        height={150}
        left={50}
        right={50}
        alt="Ain't Board Logo"
        className={styles.floatImage}
      />

      <div className={styles.adminContent}>{props.children}</div>
    </div>
  );
}
