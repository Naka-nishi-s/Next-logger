"use client";

import styles from "./page.module.css";

export default function Home() {
  /** Userのデータを取得する */
  const getUserData = async () => {
    const response = await fetch("/api/sample");
    const data = await response.json();
    console.log(data);
  };

  /** Userのデータを送る */
  const postUserData = async () => {
    const user = { id: 2, name: "Nakanishi" };
    const response = await fetch("/api/sample", {
      method: "POST",
      body: JSON.stringify({ user }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <main className={styles.main}>
      <button onClick={getUserData}>リクエスト</button>
      <button onClick={postUserData}>リクエスト2</button>
    </main>
  );
}
