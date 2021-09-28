import { useState } from "react";
import Article from "./components/Article";
import Navbar from "./components/Navbar";
import articles from "./data";

function App() {
  // eslint-disable-next-line
  const [posts, setPosts] = useState(articles);
  return (
    <>
      <Navbar />
      <main>
        <section className="articles">
          {posts.map(post => {
            return <Article key={post.id} {...post} />
          })}
        </section>
      </main>
    </>
  );
}

export default App;
