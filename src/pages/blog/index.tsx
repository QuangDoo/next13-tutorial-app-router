// Static Generation with Data
// Some page requies fetching external data for pre-rendering
// These are 2 scenarios, and one or both might appy.

import Link from "next/link";

// Scenarios 1: Ur page content depends on external data: getStaticProps
const BlogPage = ({ posts }) => {
  return (
    <div>
      <h1>Static Generation with Data - getStaticProps</h1>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        {posts.map((item, index) => (
          <ul key={item.userId + index}>
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
    </div>
  );
};

export default BlogPage;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return { props: { posts: data } };
}
