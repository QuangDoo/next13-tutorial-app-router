import { useRouter } from "next/router";

const PostOptional = () => {
  const router = useRouter();
  return <div>{router.query.post}</div>;
};

export default PostOptional;
