import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("https://manikchawla12.github.io/db.json/blogs/" + id);

  const history = useHistory();

  const handleClick = () => {
    fetch("https://manikchawla12.github.io/db.json/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      console.log("blog deleted");
      history.push("/");
    });
  };

  return (
    <div className="blog-details blogPage-title">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete Blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
