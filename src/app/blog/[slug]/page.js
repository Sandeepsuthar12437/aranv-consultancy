import Blog from "../../../components/Blog";
import CaliberSection from "../../../components/CaliberSection";
import data from "../../../data/data.json";
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

export async function generateStaticParams() {
  return Object.keys(data).map((slug) => ({ slug }));
}
