"use client"; // Use Client Components

import Image from "next/image";
import styles from "./page.module.css";
import { styled } from "styled-components";

export default function Home() {
  const Contaniner = styled.div`
    padding: 0 2rem;
  `;
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {/* <Contaniner>Hello</Contaniner> */}
      </div>
    </main>
  );
}
