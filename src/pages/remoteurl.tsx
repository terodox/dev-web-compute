import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Large image</title>
        <meta
          name="description"
          content="An optimized picture of the pillars of creation"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main className={styles.main}>
        <figure>
          <figcaption>Remote image</figcaption>
          <Image
            src="https://s3.riyadhseason.com/uploads/images/08becbbff70b4cdfb19473a840470ff6_325-325.png"
            alt="Remote image"
            height={220}
            width={325}
            quality={75}
          ></Image>
        </figure>
      </main>
    </>
  );
}
