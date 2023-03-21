import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>This page doesn't exists</p>
      <Link to="/">Back to HomePage...</Link>
    </div>
  );
};

export default ErrorPage;
