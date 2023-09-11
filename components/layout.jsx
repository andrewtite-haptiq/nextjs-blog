import Head from "next/head";
import Image from "next/image";
import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Link from "next/link";

const name = 'Andrew Tite';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel={'icon'} href={'/favicon.ico'} />
        <meta
          name={'description'}
          content={'Learn how to build a personal website using Next.js'}
        />
        <meta
          property={'og:image'}
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https://nextjs.org/static/images/nextjs-logo.svg`}
        />
        <meta
          name={'og:title'}
          content={siteTitle}
        />
        <meta
          name={'twitter:card'}
          content={'summary_large_image'}
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src={'/images/profile.jpg'}
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>
              {name}
            </h1>
          </>
        ) : (
          <>
            <Link href={'/'}>
              <Image
                priority
                src={'/images/profile.jpg'}
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href={'/'}>
                <a className={utilStyles.colorInherit}>
                  {name}
                </a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>
        {children}
      </main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href={'/'}>
            {'<'} Back to home
          </Link>
        </div>
      )}
    </div>
  )
}
