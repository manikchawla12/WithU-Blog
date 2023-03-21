import { useState } from "react";
import { Link } from "react-router-dom";

const Bloglist = ({ blogs, title }) => {
  //   const blogs = props.blogs;
  //   const title = props.title;
  const [search, setSearch] = useState("");

  return (
    <div className="blogPage-title">
      <h1 style={{ display: "flex", justifyContent: "space-evenly" }}>
        {title}
        {
          <form className="search">
            <input
              type="text"
              name="search"
              placeholder="Search title"
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        }
      </h1>
      <div className="blog-list">
        {blogs
          .filter((blog) => {
            if (search === "") {
              return blog;
            } else if (
              blog.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return blog;
            }
            return false;
          })
          .map(blog => (
            <div className="blog-preview" key={blog.id}>
              <Link to={`/blogs/${blog.id}`}>
                <img src={blog.photo} alt="blogPhoto" />
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Bloglist;
