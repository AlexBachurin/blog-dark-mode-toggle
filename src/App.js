import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <Navbar />
      <main>
        <section className="articles">
          <article className="post">
            <h2>Title</h2>
            <div className="post-info">
              <span>date</span>
              <span>5 min read</span>
            </div>
            <p>Descr</p>
          </article>
          <article className="post">
            <h2>Title</h2>
            <div className="post-info">
              <span>date</span>
              <span>5 min read</span>
            </div>
            <p>Descr</p>
          </article>
          <article className="post">
            <h2>Title</h2>
            <div className="post-info">
              <span>date</span>
              <span>5 min read</span>
            </div>
            <p>Descr</p>
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
