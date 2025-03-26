import Blog from "@/components/Blog";
import CaliberSection from "@/components/CaliberSection";
import { ContactSection } from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import data from "@data/data.json";

const BlogPage = async ({ params }) => {
  const { slug } = await params;
  return (
    <>
      <Blog blogSlug={slug} />
      <CaliberSection data={data.blogCaliberData} />
    </>
  );
};

export default BlogPage;

// Generate static paths at build time
export function generateStaticParams() {
  const blogData = data;
  return Object.keys(blogData).map((slug) => ({
    slug: slug,
  }));
}
