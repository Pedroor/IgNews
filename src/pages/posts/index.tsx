import styles from "./styles.module.scss";

import Head from "next/head";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | TechNews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="https://howow.linebr.com/minhaconta.php">
            <time>12 de março de 2021</time>

            <strong>
              Next.JS - Novidades na versão 10 e atualização do blog para
              melhorar a performance
            </strong>
            <p>
              Vamos experimentar algumas dessas melhorias e aplicar na prática
              no blog que criamos para ir evoluindo com essa ferramenta que tem
              revolucionado a web.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>

            <strong>
              Next.JS - Novidades na versão 10 e atualização do blog para
              melhorar a performance
            </strong>
            <p>
              Vamos experimentar algumas dessas melhorias e aplicar na prática
              no blog que criamos para ir evoluindo com essa ferramenta que tem
              revolucionado a web.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>

            <strong>
              Next.JS - Novidades na versão 10 e atualização do blog para
              melhorar a performance
            </strong>
            <p>
              Vamos experimentar algumas dessas melhorias e aplicar na prática
              no blog que criamos para ir evoluindo com essa ferramenta que tem
              revolucionado a web.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
