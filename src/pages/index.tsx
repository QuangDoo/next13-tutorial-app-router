import { Inter } from "next/font/google";
// import Layout from "~/components/Layout";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ReactElement } from "react";
import Country from "~/components/country";
import Layout from "~/components/layout";
import NestedLayout from "~/components/nested-layout";

const inter = Inter({ subsets: ["latin"] });

type Name = {
  common: string;
  official: string;
};

export type CountryTypeData = {
  name: Name & {
    nativeName: {
      [key: string]: Name;
    };
  };
  languages: {
    [key: string]: string;
  };
  capital: string[];
  latlng: [number, number];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
};

// Per-Page Layouts
const Home = ({
  countries,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <main
      className={`flex min-h-screen flex-wrap items-center justify-center p-24 space-x-2 space-y-2 ${inter.className}`}
    >
      {countries.map((countries) => (
        <Country key={countries.name.official} {...countries} />
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

export const getServerSideProps = (async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  // await fetch("/api/cookies");

  const data: CountryTypeData[] = await res.json();

  return { props: { countries: data } };
}) satisfies GetServerSideProps<{
  countries: CountryTypeData[];
}>;
