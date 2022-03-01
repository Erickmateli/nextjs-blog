import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  // console.log(allPostsData)
  return (
    <Layout Home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I'm a UX Designer and a Front End Developer from Nairobi Kenya. I
          enjoy turning complex problems into simple, beautiful and intuitive
          interface designs.Am experienced in HTML,CSS,Javascript,React js and
          Next Js content management systems.When I'm not coding or pushing
          pixels, you'll find me adventuring.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map((data) => (
            <li className={utilStyles.listItem} key={data.id}>
              <Link href={`/posts/${data.id}`}>
                <a>{data.title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={data.date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
