import BlogpageBanner from "../../Shared/BlogPage/BlogpageBanner/BlogpageBanner";
import NewsList from "../../Shared/BlogPage/NewsList/NewsList";
import ReadBlog from "../../Shared/ReadBlog/ReadBlog";

const Blog = () => {
  return (
    <div>
      <BlogpageBanner />
      <NewsList />
      <ReadBlog />
    </div>
  );
};

export default Blog;
