"use client";

import log4js from "log4js";
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

  log4js.configure({
    appenders: {
      console: {
        type: "console",
        layout: {
          type: "pattern",
          pattern:
            "%d{yyyy/MM/dd hh:mm:ss} [%-5p] [%X{traceId}] [%c] (%t) %m%ex%n",
        },
      },
    },
    categories: {
      default: { appenders: ["console"], level: "info" },
    },
  });

  const logger = log4js.getLogger();
  logger.level = "debug";

  logger.info("nice");

  return (
    <main className={styles.main}>
      <button onClick={getUserData}>リクエスト</button>
      <button onClick={postUserData}>リクエスト2</button>
    </main>
  );
}
