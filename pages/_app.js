import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Link href="/create-post">|| Create Post |</Link>
      <Link href="/post-list">| Post List |</Link>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
