import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";

import styles from "./styles.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome</span>
          <h1>
            News about the <span>React</span>world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>
          <SubscribeButton priceId={"10"} />
        </section>
        <img src="/images/avatar.svg" alt="girl Coding" />
      </main>
    </>
  );
}
