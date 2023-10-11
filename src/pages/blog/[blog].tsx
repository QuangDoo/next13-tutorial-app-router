import { useRouter } from "next/router";

const BlogDetail = () => {
  const router = useRouter();

  return <div>blog id is {router.query.blog}</div>;
};

export default BlogDetail;
