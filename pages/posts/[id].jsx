import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.scss";

// getStaticProps() runs at build time in production, and inside the function, you can fetch external data and send it as props to the page.
// In development (npm run dev or yarn dev), getStaticProps runs on every request.
// In production, getStaticProps runs at build time.
// However, this behavior can be enhanced using the fallback key returned by getStaticPaths
// getStaticProps() should return an object with:
// props - An optional object with the props that will be received by the page component.
// revalidate - An optional amount in seconds after which a page re-generation can occur.
// If revalidate is not specified, then re-generation will occur after every request to the page.
// If revalidate is false, then re-generation can not occur without re-deploying.
// If revalidate is true, then re-generation will occur after every request to the page in production.
export async function getStaticProps({params}) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

// getStatucPaths() is required for dynamic routes. It tells Next.js which dynamic routes to pre-render based on data.
// In this example, we have [id].jsx, so Next.js will pre-render all the paths for posts like /posts/ssg-ssr and /posts/pre-rendering.
// getStaticPaths() returns an array of possible values for id.
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}
