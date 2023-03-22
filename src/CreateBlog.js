import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [photo, setPhoto] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    setIsLoading(false);
    e.preventDefault();
    setIsLoading(true);

    const blog = { title, body, author, photo };
    fetch("https://manikchawla12.github.io/db.json/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsLoading(false);
      //   history.go(-1);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a new blog here...</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Blog Title:</label>
        <input
          type="text"
          name="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="author">Author's Name:</label>
        <select
          value={author}
          required
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option hidden>Choose the author</option>
          <option value="Manik Chawla">Manik Chawla</option>
          <option value="Abhishek">Abhishek</option>
          <option value="Chirag">Chirag</option>
          <option value="Aman">Aman</option>
        </select>
        <label htmlFor="photo">Image URL:</label>
        <input
          type="link"
          value={photo}
          placeholder="Insert image url"
          onChange={(e) => setPhoto(e.target.value)}
        />
        <label htmlFor="body">Blog:</label>
        <textarea
          required
          rows="15"
          cols="50"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
};

export default CreateBlog;
