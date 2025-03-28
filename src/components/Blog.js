import OthreBanner from "./OtherBanner";
import PostComponent from "../components/PostComponent";
import BlogContent from "../components/BlogContent";
import Searchbar from "../components/Searchbar";
import BlogPost from "../components/BlogPost";
import SubscribeSection from "../components/SubscribeSection";
import SocialShare from "../components/SocialShare";
import ResearchSection from "../components/ResearchSection";
import data from "../data/data.json";

const Blog = ({ blogSlug }) => {
  const blog = data[blogSlug];

  return (
    <section>
      <OthreBanner data={blog.bannerdata} />
      <div className="max-w-[1200px] px-[15px] mx-auto my-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(770px,2fr)_minmax(373px,1fr)] gap-[15px]">
          <div className="w-full md:mr-3">
            <PostComponent data={blog.blogPostInfo} />
            {blog.blogContent &&
              Object.values(blog.blogContent).map((item, index) => (
                <BlogContent data={item} key={index} />
              ))}
          </div>
          <div className="w-full md:ml-3">
            <Searchbar />
            <BlogPost data={data.aiblogData} />
            <SubscribeSection />
          </div>
        </div>
        <SocialShare />
        <ResearchSection data={blog.relatedArticles} />
      </div>
    </section>
  );
};

export default Blog;
