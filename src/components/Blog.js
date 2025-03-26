import BlogPost from "./BlogPost";
import data from "@data/data.json";
import PostComponent from "./PostComponent";
import Searchbar from "./Searchbar";
import SubscribeSection from "./SubscribeSection";
import BlogContent from "./BlogContent";
import SocialShare from "./SocialShare";
import { ResearchSection } from "./ResearchSection";
import OthreBanner from "./OtherBanner";

const Blog = ({ blogSlug }) => {
  console.log("blogSlug", blogSlug);

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
