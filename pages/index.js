import Head from "next/head";
import Layout from "../src/component/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>도연 nextjs 연습중</title>
        <meta name="description" content="도도코딩" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  );
}
