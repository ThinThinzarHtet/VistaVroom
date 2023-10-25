import { BlogPost, PrimaryButton } from "../components";

const blogPosts = [
  {
    date: "Jan 12",
    category: "Tips",
    title: "Safest car rental services in 2023",
  },
  {
    date: "Jan 6",
    category: "Rental",
    title: "Best Car Collection In The World",
  },
  {
    date: "Jan 22",
    category: "Tricks",
    title: "Best Car Collection In The World",
  },
];
const Posts = () => {
  return (
    <div className="mt-36">
      <div className="wrapper flex flex-col lg:flex-row justify-start lg:justify-between gap-12 lg:gap-6">
        <div className="flex flex-col gap-9 flex-1">
          <h1 className="head_text text-center lg:text-start">
            Our <span className="green_text">recent posts</span>
          </h1>
          <PrimaryButton className="w-full sm:w-fit mx-auto lg:mx-0">
            Read Blogs
          </PrimaryButton>
        </div>
        <div className="flex flex-col gap-7 flex-1">
          {blogPosts.map((blogPost, index) => (
            <BlogPost
              key={index}
              date={blogPost.date}
              category={blogPost.category}
              title={blogPost.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
