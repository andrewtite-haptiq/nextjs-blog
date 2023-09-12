import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import { getSortedPostsData } from '../lib/posts';
import Link from "next/link";
import Date from "../components/date";

// This is an example of getServerSideProps. It will be called at request time.
// Because getServerSideProps is called at request time, its parameter (context) contains request specific parameters.
// You should use getServerSideProps only if you need to pre-render a page whose data must be fetched at request time.
// Time to first byte (TTFB) will be slower than getStaticProps because the server must compute the result on every request,
// and the result cannot be cached by a CDN without extra configuration.
// You CAN NOT export getServerSideProps from a NON-PAGE file. This is a page file so we can.
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     },
//   };
// }


// You CANNOT export getStaticProps from a NON-PAGE file. This is a page file so we can.
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  console.log(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm <strong>Andrew Tite</strong>.
        </p>
        <p>
          I'm a Full-Stack Developer at <a target={"_blank"} href={"https://webonise.com"}>Webonise Lab</a> and a tech enthusiast.
        </p>
        <p>
          (This is a sample website.)
        </p>
      </section>
      <section className={utilStyles.headingMd} style={{ margin: '60px 0'}}>
        <Link href={"/posts/page-that-does-not-exist-but-you-are-trying-it-anyway"}>
          <strong>
            Page that does not exist &rarr;&rarr;&rarr;
          </strong>
        </Link>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br/>
              <small className={utilStyles.lightText}>
                <Date dateString={date}/>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
