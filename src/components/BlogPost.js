const BlogPost = () => {
  const posts = [
    "What Would the World Be Like If Artificial Intelligence Did Not Exist?",
    "What Would the World Be Like If Artificial Intelligence Did Not Exist?",
    "Essential Checklist For Improving B2C Web Design",
    "Guide and Ways to Boost Your Digital Presence",
    "Latest Digital Marketing Trends, A Deep Dive Into Social Commerce!",
    "Stay first in the competition and reach the wider audience",
  ];

  return (
    <div className="ml-[18px]">
      <h4 className="text-xl pl-5 mb-[18px]">Trending Post</h4>
      <ul>
        {posts.map((post, index) => (
          <li
            key={index}
            className={`list-disc ${
              index !== posts.length - 1 ? "border-b-[1px] border-black" : ""
            } mb-[11px] pb-[11px]`}
          >
            <a href="">
              <p className="text-[17px] hover:text-red-500">{post}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPost;
