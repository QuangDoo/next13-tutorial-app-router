import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  console.log("router", router);
  return <div>{router.query.post}</div>;
};

export default Post;
