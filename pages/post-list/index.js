import Link from "next/link";

const postListC = ({ postList }) => (
  <>
    <h2>Post list</h2>
    <ul>
      {postList &&
        postList.map((post) => (
          <Link key={post.id} href={`/post-list/${post.id}`}>
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          </Link>
        ))}
    </ul>
  </>
);

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://isdi-blog-posts-api.herokuapp.com/posts"
  );
  const list = await response.json();

  return {
    props: { postList: list }, // will be passed to the page component as props
  };
};
//
export default postListC;
