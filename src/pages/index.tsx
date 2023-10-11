import { Inter } from "next/font/google";
import Link from "next/link";
// import Layout from "~/components/Layout";
import { ReactElement } from "react";
import Layout from "~/components/layout";
import NestedLayout from "~/components/nested-layout";
import { NextPageWithLayout } from "./_app";

const inter = Inter({ subsets: ["latin"] });

// Per-Page Layouts
const Home: NextPageWithLayout = () => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {[...Array(10)].map((item, index) => (
        <ul key={index}>
          <li>
            <Link
              href={{
                pathname: "blog/1",
                query: { post: index + 1 },
              }}
            >
              Post {index + 1}
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
