import Bloglist from "./Bloglist";
import useFetch from "./useFetch";
import websiteHeader from "./web-header.png";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("https://manikchawla12.github.io/db.json/blogs");

  return (
    <div className="home">
      <img className="websiteHeader" src={websiteHeader} alt="website-header" />
      {error && <div>{error}</div>}
      {isLoading && <div className="blog-details">Loading...</div>}
      {blogs && <Bloglist blogs={blogs} title="All Posts" />}
      {/* <Bloglist blogs={blogs.filter((blog)=> blog.author==="Manik")}  title="Manik's Posts"/> */}
      {/* <button onClick={()=>setName('Abhishek')}>Change name</button>
    <p>{name}</p> */}
      <div className="footer">
        <footer>
          <h6>
            <a
              href="https://github.com/manikchawla12?tab=repositories"
              target="_blank"
              rel="noreferrer"
              alt="github-Link"
            >
              &copy; 2023 Manik Chawla
            </a>
          </h6>
        </footer>
      </div>
    </div>
  );
};

export default Home;
