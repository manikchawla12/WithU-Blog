import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBlog from "./CreateBlog";
import BlogDetails from "./BlogDetails";
import ErrorPage from "./ErrorPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="blogApp-titile">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <CreateBlog />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
