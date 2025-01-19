import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
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
      <section className={(utilStyles.headingMd, utilStyles.darkText)}>
        <p>
          [ Hi ✌, a JavaScript/TypeScript Programmer with over two years of
          experience in web application development. I'm also proficient in
          programming languages such as C#, and front-end framework NestJs,
          Nextjs. ]
        </p>
        <p>
          I have experience in building web applications from scratch, including
          database design and development, API creation, front-end framework
          utilization, and integration with third-party services.
        </p>
        <p>
          Thank you for reading my brief profile, and I'd be happy to discuss
          with you further about how I can help your project.
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={(utilStyles.headingLg, utilStyles.darkText)}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
