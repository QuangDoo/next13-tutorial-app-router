// Scenario 2: Your page path depends on external data
// example: product id, detail page, pages own router.query.[file name]

const PostPage = ({ data }) => {
  // console.log("data", data);
  return (
    <div>
      {data.id} - {data.title}
    </div>
  );
};

export default PostPage;

// Export paths for pre rendering
export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = data?.map((post) => ({
    params: { post: post.id + "" },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
// you need to export getStaticProps so that you can fetch the data about the post with this id and use it to pre-render the page:
export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.post}`
  );
  const data = await res.json();

  return { props: { data } };
}
