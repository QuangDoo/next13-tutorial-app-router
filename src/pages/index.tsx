import { Inter } from "next/font/google";
import Link from "next/link";
// import Layout from "~/components/Layout";
import { ReactElement } from "react";
import Layout from "~/components/layout";
import NestedLayout from "~/components/nested-layout";
import { NextPageWithLayout } from "./_app";

const inter = Inter({ subsets: ["latin"] });

// Per-Page Layouts
const Home: NextPageWithLayout = ({ data }) => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {data.map((item) => (
        <ul key={item.userId}>
          <li>
            <Link
              href={{
                pathname: `blog/${item.id}`,
              }}
            >
              {item.title}
            </Link>
          </li>
        </ul>
      ))}
    </main>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default Home;

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: { userId: string; id: string; body: string; title: string }[] =
    await res.json();

  return { props: { data } };
}
