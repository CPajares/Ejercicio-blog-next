import { useRouter } from "next/router";

const PostDetail = ({ postProp }) => {
  const route = useRouter();
  if (route.isFallback) {
    return <p>Loading</p>;
  }
  return (
    <>
      <h3>{postProp.title}</h3>
      <p>{postProp.body}</p>
    </>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch(
    `https://isdi-blog-posts-api.herokuapp.com/posts/`
  );
  const posts = await response.json();
  const paths = posts.map((post) => ({
    params: { id: `${post.id}` },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const response = await fetch(
    `https://isdi-blog-posts-api.herokuapp.com/posts/${id}`
  );
  const post = await response.json();

  return {
    props: {
      postProp: post,
    },
    revalidate: 20,
  };
};

export default PostDetail;
